import mondaySdk from "monday-sdk-js";
import { SlimMondayItem } from "../types/esti.types";

// initialize monday SDK
const monday = mondaySdk();

export const getContext = async () => {
  return monday.get("context");
};

export const getItemName = async (itemId: number) => {
  return monday.api(`query { items(ids: ${itemId}) { name } }`);
};

export const getSkinnyItems = async (limit: number) => {
  return monday.api(
    `query {
    items(limit: ${limit}) {
      name
      id
    }
  }`
  );
};

export const getFullItems = async (items: { item: SlimMondayItem }[]) => {
  const ids = items.map((item) => +item.item.id);

  return monday.api(
    `query { items (ids: [${ids}]) { id name created_at creator { name photo_thumb email } board { name } column_values { title text type } } }`
  );
};
