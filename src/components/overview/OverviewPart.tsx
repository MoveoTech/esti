import React from "react";

import { Overview } from "../../types/esti.types";
import {
  OverviewContainer,
  OverviewData,
  Title,
  Matches,
  CalcField,
} from "./style";

interface OverviewProps {
  data: Overview;
}

export const OverviewPart = ({ data }: OverviewProps) => {
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
