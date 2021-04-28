import Fuse from "fuse.js";
import { formatTitle } from "./utils";
import { COLUMN_SEARCH_QUERY } from "../constants/constants";

export const searchByName = async (name, items, limit) => {
  // options for the fuse collection
  const options = {
    includeScore: true,
    keys: [
      {
        name: "name",
        weight: 1,
      },
    ],
    threshold: 0,
  };

  // create an index for our search
  const idx = Fuse.createIndex(options.keys, items);

  // create fuse collection
  const fuse = new Fuse(items, options, idx);

  // return found collection after it has been filtered to remove irrelevant matches
  return fuse.search(formatTitle(name)).slice(0, limit);
};

export const searchByColumnName = async (items) => {
  const options = {
    keys: [
      {
        name: "title",
      },
    ],
    threshold: 0.4,
  };

  const idx = Fuse.createIndex(options.keys, items);

  const fuse = new Fuse(items, options, idx);

  return fuse.search(COLUMN_SEARCH_QUERY);
};

export const sortByWeight = (name, items) => {
  const options = {
    keys: [
      {
        name: "title",
        weight: 1,
      },
    ],
  };

  const idx = Fuse.createIndex(options.keys, items);

  const fuse = new Fuse(items, options, idx);

  return fuse.search(formatTitle(name)).map((i) => i.item);
};
