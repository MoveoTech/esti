import moment from "moment";
import _ from "lodash";

import { searchByColumnName, sortByWeight } from "./search";
import { colors } from "../constants/colors";

export const formatTitle = (title) => {
  const formattedTitle = title.split(" ").join(" | =");
  return `=${formattedTitle}`;
};

export const filterNumericColumns = (columns) => {
  return columns.filter((c) => c.type === "numeric");
};

export const formatItems = async (items) => {
  moment.locale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s",
      s: "s",
      m: "1m",
      mm: "%dm",
      h: "1h",
      hh: "%dh",
      d: "1d",
      dd: "%dd",
      M: "1M",
      MM: "%dM",
      y: "1y",
      yy: "%dy",
    },
  });
  const formattedItems = await Promise.all(
    items.map(async (i) => {
      let value;
      await searchByColumnName(i.column_values).then((res) => {
        if (res.length > 0) value = res[0].item.text;
      });
      if (typeof value !== "undefined")
        return {
          id: i.id,
          title: i.name,
          board: i.board.name,
          value: value ? +value : "Unset",
          createdAt: moment(i.created_at).fromNow(),
          creator: i.creator && {
            name: i.creator.name,
            photo: i.creator.photo_thumb,
            email: i.creator.email,
          },
        };
    })
  );
  const fullItems = formattedItems.filter((i) => typeof i !== "undefined");
  return fullItems;
};

export const calculateMedian = (items) => {
  const values = items.map((i) => i.value).filter((v) => typeof v === "number");

  if (!values.length > 0) return "Unset";

  const mid = Math.floor(values.length / 2),
    nums = [...values].sort((a, b) => a - b);

  const median =
    values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

  return Math.round(median);
};

export const calculateAvg = (items) => {
  // filter out non-number values
  const values = items.map((i) => i.value).filter((v) => typeof v === "number");

  if (!values.length > 0) return "Unset";
  // get sum of values
  let sum = 0;
  for (let i in values) {
    sum += values[i];
  }
  // get amount of values
  const amount = values.length;

  const average = sum / amount;

  // return rounded average
  return Math.round(average);
};

export const shuffleColors = () => {
  return _.shuffle(colors);
};

const assignColorByBoard = (items) => {
  const colorBoards = [];
  const shuffledColors = shuffleColors();

  return items.map((item, idx) => {
    const board = {
      name: item.board,
    };

    const filteredColorBoards = colorBoards.filter(
      (b) => b.name === board.name
    );

    if (filteredColorBoards.length > 0) {
      board.color = filteredColorBoards[0].color;
    } else {
      board.color = shuffledColors[0];
      shuffledColors.shift();
      colorBoards.push(board);
    }

    return {
      ...item,
      board,
    };
  });
};

const getMin = (items) => {
  const values = items.map((i) => i.value).filter((v) => typeof v === "number");
  if (!values.length > 0) return "Unset";
  return Math.min(...values);
};

const getMax = (items) => {
  const values = items.map((i) => i.value).filter((v) => typeof v === "number");
  if (!values.length > 0) return "Unset";
  return Math.max(...values);
};

export const formatData = async (name, items) => {
  const formattedItems = await formatItems(items);
  return {
    items: assignColorByBoard(sortByWeight(name, formattedItems)),
    average: calculateAvg(formattedItems),
    median: calculateMedian(formattedItems),
    min: getMin(formattedItems),
    max: getMax(formattedItems),
    total: formattedItems.length,
  };
};
