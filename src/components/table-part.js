import React from "react";
import styled from "styled-components";
import { TableRow } from "./table-row";

export const TablePart = ({ data }) => {
  return (
    <Table>
      <Title>Best Matches</Title>
      {data.length > 0 ? (
        data.map((item, index) => {
          return <TableRow row={item} key={item.id} index={index}></TableRow>;
        })
      ) : (
        <NoData>Could not find any relevant matches..</NoData>
      )}
    </Table>
  );
};

const Table = styled("div")``;

const Title = styled("div")`
  color: #5559df;
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 5px;
`;

const NoData = styled("div")`
  font-size: 0.9rem;
  margin-top: 16px;
  color: #808185;
`;
