export interface MondayItemCreator {
  photo: string;
  name: string;
  email: string;
}

export interface Overview {
  total: string | number | "Unset";
  average: string | number | "Unset";
  median: string | number | "Unset";
  min: string | number | "Unset";
  max: string | number | "Unset";
}

export interface MondayBoard {
  color: string;
  name: string;
}

export interface MondayItem {
  id: string;
  createdAt: string;
  creator: MondayItemCreator;
  title: string;
  board: MondayBoard;
  value: string | number;
}

export interface RawMondayItem {
  id: string;
  name: string;
  created_at: string;
  creator: {
    name: string;
    photo_thumb: string;
    email: string;
  };
  board: {
    name: string;
  };
  column_values: {
    title: string;
    text: string;
    type: string;
  };
}

export interface SlimMondayItem {
  id: string;
  name: string;
}

export interface MondayColumn {
  title: string;
  type: string;
  text: string;
}

export interface TableDataToDisplay extends Overview {
  items: MondayItem[];
}

export type TimeFormat = "h" | "d";
