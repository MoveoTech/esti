import React, { useState, useEffect } from "react";
import "./App.css";

//Explore more Monday React Components here: https://style.monday.com/
import { searchByName } from "./utils/search";
import { OverviewPart } from "./components/overview-part";
import { TablePart } from "./components/table-part";
import {
  getContext,
  getFullItems,
  getItemName,
  getSkinnyItems,
} from "./services/monday.api";
import { formatData } from "./utils/utils";
import { Spinner } from "./components/spinner";

export const App = () => {
  const [data, setData] = useState({});
  const [fetching, setFetching] = useState(true);

  // data fetching //
  const fetchContext = async () => {
    const { data } = await getContext();
    // setContext(data);
    return data;
  };

  const fetchItemName = async (payload) => {
    const {
      data: { items },
    } = await getItemName(payload);
    // setItemName(items[0].name);
    return items[0].name;
  };

  const fetchItems = async (name, limit) => {
    const {
      data: { items },
    } = await getSkinnyItems(limit);
    const searchItems = await searchByName(name, items, 20);
    return searchItems;
  };

  const fetchFullItmes = async (items) => {
    const { data } = await getFullItems(items);
    return data;
  };

  useEffect(() => {
    let itemName = "";
    async function fetchData() {
      await fetchContext().then(async ({ itemId }) => {
        await fetchItemName(itemId).then(async (res) => {
          itemName = res;
          await fetchItems(res, 200000).then(async (res) => {
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
    <div className="App">
      {fetching ? (
        <div className="loader">
          <Spinner />
        </div>
      ) : (
        <div>
          <OverviewPart
            data={{
              total: data.total,
              median: data.median,
              average: data.average,
            }}
          ></OverviewPart>
          <TablePart data={data.items}></TablePart>
        </div>
      )}
    </div>
  );
};

export default App;
