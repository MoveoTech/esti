import React from "react";
import styled from "styled-components";
import { TableRow } from "./table-row";

export const TablePart = ({ data }) => {
  return (
    <Table>
      <Title>Best Matches</Title>
      {data.map((item) => {
        return <TableRow row={item} key={item.id}></TableRow>;
      })}
    </Table>
  );
};

const Table = styled("div")``;

const Title = styled("div")`
  color: #5559df;
  font-size: 18px;
  margin-top: 24px;
`;
