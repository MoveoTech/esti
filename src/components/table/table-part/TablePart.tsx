import React from "react";

import { TableRow } from "../table-row/TableRow";
import { NoData, Table, Title } from "./style";
import { MondayItem, TimeFormat } from "../../../types/esti.types";

interface TableProps {
  data: MondayItem[];
  timeFormat: TimeFormat;
}
export const TablePart = ({ data, timeFormat }: TableProps) => {
  return (
    <Table>
      <Title>Best Matches</Title>
      {data.length > 0 ? (
        data.map((item, index: number) => {
          return (
            <TableRow
              row={item}
              key={item.id}
              timeFormat={timeFormat}
              index={index}
            ></TableRow>
          );
        })
      ) : (
        <NoData>Could not find any relevant matches..</NoData>
      )}
    </Table>
  );
};
