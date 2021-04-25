import { searchByColumnName, sortByWeight } from "./search";

export const formatTitle = (title) => {
  const formattedTitle = title.split(" ").join(" | =");
  return `=${formattedTitle}`;
};

export const filterNumericColumns = (columns) => {
  return columns.filter((c) => c.type === "numeric");
};

export const formatItems = async (items) => {
  const formattedItems = await Promise.all(
    items.map(async (i) => {
      let value;
      await searchByColumnName(i.column_values).then((res) => {
        if (res.length > 0) value = res[0].item.text;
      });
      if (typeof value !== "undefined")
        return {
          title: i.name,
          board: i.board.name,
          value: value ? +value : "Unset",
          createdAt: i.created_at,
          creator: {
            name: i.creator.name,
            photo: i.creator.photo_thumb,
            photoSmall: i.creator.photo_thumb_small,
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

export const formatData = async (name, items) => {
  const formattedItems = await formatItems(items);
  return {
    items: sortByWeight(name, formattedItems),
    average: calculateAvg(formattedItems),
    median: calculateMedian(formattedItems),
    total: formattedItems.length,
  };
};
