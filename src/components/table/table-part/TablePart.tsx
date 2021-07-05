import React from "react";

import { TableRow } from "../table-row/TableRow";
import { NoData, Table, Title } from "./style";
import { MondayItem } from "../../../types/esti.types";

interface TableProps {
  data: MondayItem[];
}
export const TablePart = ({ data }: TableProps) => {
  return (
    <Table>
      <Title>Best Matches</Title>
      {data.length > 0 ? (
        data.map((item, index: number) => {
          return <TableRow row={item} key={item.id} index={index}></TableRow>;
        })
      ) : (
        <NoData>Could not find any relevant matches..</NoData>
      )}
    </Table>
  );
};
