import React, { useState, useEffect } from "react";
import "./App.css";

//Explore more Monday React Components here: https://style.monday.com/
import { searchByName } from "./utils/search";
import { OverviewPart } from "./components/overview/OverviewPart";
import { TablePart } from "./components/table/table-part/TablePart";
import {
  getContext,
  getFullItems,
  getItemName,
  getSkinnyItems,
} from "./services/monday.api";
import { formatData } from "./utils/utils";
import { Spinner } from "./components/spinner/Spinner";
import Tutorial from "./components/tutorial/Tutorial";
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from "./utils/storage";
import Info from "./components/info/Info";
import { SlimMondayItem, TableDataToDisplay } from "./types/esti.types";

export const App = () => {
  const [data, setData] = useState<TableDataToDisplay>({
    items: [],
    average: "Unset",
    total: "Unset",
    median: "Unset",
    min: "Unset",
    max: "Unset",
  });
  const [fetching, setFetching] = useState(true);
  const [showTutorial, setShowTutorial] = useState(() => {
    const firstTime = getFromStorage();
    return firstTime ? false : true;
  });

  // data fetching //
  const fetchContext = async () => {
    const { data } = await getContext();
    // setContext(data);
    return data;
  };

  const fetchItemName = async (payload: number) => {
    console.log(payload);
    const {
      data: { items },
    } = await getItemName(payload);
    return items[0].name;
  };

  const fetchItems = async (name: string, limit: number) => {
    console.log(name, limit);
    const {
      data: { items },
    } = await getSkinnyItems(limit);
    const searchItems = await searchByName(name, items, 20);
    return searchItems;
  };

  const fetchFullItmes = async (items: { item: SlimMondayItem }[]) => {
    console.log(items);
    const { data } = await getFullItems(items);
    return data;
  };

  const finishTutorial = () => {
    addToStorage();
    setShowTutorial(false);
  };

  const openTutorial = () => {
    removeFromStorage();
    setShowTutorial(true);
  };

  const renderContent = () => {
    return fetching ? (
      <Spinner />
    ) : (
      <div className="inner-wrapper">
        <Info openTutorial={openTutorial} />
        <OverviewPart
          data={{
            total: data.total,
            median: data.median,
            average: data.average,
            min: data.min,
            max: data.max,
          }}
        ></OverviewPart>
        <TablePart data={data.items}></TablePart>
      </div>
    );
  };

  useEffect(() => {
    let itemName = "";
    async function fetchData() {
      await fetchContext().then(async ({ itemId }) => {
        await fetchItemName(itemId).then(async (res) => {
          itemName = res;
          await fetchItems(res, 500000).then(async (res) => {
            await fetchFullItmes(res).then(async ({ items }) => {
              setData(await formatData(itemName, items));
              setFetching(false);
            });
          });
        });
      });
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      {showTutorial ? (
        <Tutorial finishTutorial={finishTutorial} />
      ) : (
        renderContent()
      )}
    </div>
  );
};

export default App;
