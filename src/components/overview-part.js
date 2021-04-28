import React from "react";
import styled from "styled-components";

export const OverviewPart = ({ data }) => {
  return (
    <OverviewContainer>
      <Title>Overview</Title>
      <OverviewData>
        <Matches>{`${data.total} Total Matches`}</Matches>
        <CalcField>{`${
          data.average === "Unset" ? "-" : `${data.average}`
        } Average`}</CalcField>
        <CalcField>{`${
          data.median === "Unset" ? "-" : `${data.median}`
        } Median`}</CalcField>
        <CalcField>{`${
          data.min === "Unset" ? "-" : `${data.min}`
        } Min`}</CalcField>
        <CalcField>{`${
          data.max === "Unset" ? "-" : `${data.max}`
        } Max`}</CalcField>
      </OverviewData>
    </OverviewContainer>
  );
};

const OverviewContainer = styled("div")``;

const Title = styled("div")`
  color: #fdab3d;
  font-size: 18px;
`;

const OverviewData = styled("div")`
  background: #f5f6f8;
  height: 42px;
  margin-top: 8px;
  padding: 9px;
  align-items: center;
  display: flex;
`;

const Matches = styled("div")`
  color: #808186;
  font-weight: 500;
  font-size: 14px;
`;

const CalcField = styled("div")`
  color: #323338;
  font-weight: 700;
  font-size: 14px;
  margin-left: 24px;
`;
