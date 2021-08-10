import React from "react";

import { Overview, TimeFormat } from "../../types/esti.types";
import {
  OverviewContainer,
  OverviewData,
  Title,
  Matches,
  CalcField,
  OverviewHeader,
} from "./style";
import { formatTime } from "../../utils/utils";
import { Dropdown } from "monday-ui-react-core";

interface OverviewProps {
  data: Overview;
  timeFormat: TimeFormat;
  switchTimeFormat: (payload: TimeFormat) => void;
}

export const OverviewPart = ({
  data,
  timeFormat,
  switchTimeFormat,
}: OverviewProps) => {
  const options = [
    {
      value: "h",
      label: "By Hours",
      isFixed: true,
    },
    {
      value: "d",
      label: "By Days",
      isFixed: true,
    },
  ];

  return (
    <OverviewContainer>
      <OverviewHeader>
        <Title>Overview</Title>
        <Dropdown
          size={Dropdown.size.SMALL}
          className="time-format-input"
          options={options}
          placeholder={"Time Format"}
          defaultValue={options[0]}
          searchable={false}
          clearable={false}
          onChange={(e: any) => {
            if (e) switchTimeFormat(e.value);
          }}
        />
      </OverviewHeader>
      <OverviewData>
        <Matches>{`${data.total} Total Matches`}</Matches>
        <CalcField>{`${
          data.average === "Unset"
            ? "-"
            : `${formatTime(data.average, timeFormat)}`
        } Average`}</CalcField>
        <CalcField>{`${
          data.median === "Unset"
            ? "-"
            : `${formatTime(data.median, timeFormat)}`
        } Median`}</CalcField>
        <CalcField>{`${
          data.min === "Unset" ? "-" : `${formatTime(data.min, timeFormat)}`
        } Min`}</CalcField>
        <CalcField>{`${
          data.max === "Unset" ? "-" : `${formatTime(data.max, timeFormat)}`
        } Max`}</CalcField>
      </OverviewData>
    </OverviewContainer>
  );
};
