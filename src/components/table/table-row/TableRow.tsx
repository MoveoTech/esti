import React, { useState } from "react";

import { MondayItem, TimeFormat } from "../../../types/esti.types";
import { formatTime } from "../../../utils/utils";
import { CustomBanner } from "../../banner/Banner";
import {
  Row,
  TimeElapsed,
  ValueTime,
  TitleContainer,
  Avatar,
  BoardLabel,
  BoardLabelContainer,
} from "./style";

interface TableRowProps {
  row: MondayItem;
  timeFormat: TimeFormat;
  index: number;
}
export const TableRow = ({ row, timeFormat, index }: TableRowProps) => {
  const [showHover, setShowHover] = useState(false);

  return (
    <div>
      <Row>
        <TimeElapsed>
          <img
            src="/assets/timeElapsedIcon.svg"
            className="icon"
            alt="time-elapsed"
          ></img>
          {row.createdAt}
        </TimeElapsed>

        <TitleContainer>
          <Avatar
            src={
              row.creator
                ? row.creator.photo
                : `https://cdn7.monday.com/icons/dapulse-person-column.svg`
            }
            onMouseOver={(e) => setShowHover(true)}
            onMouseLeave={(e) => setShowHover(false)}
          />
          {showHover ? (
            <CustomBanner creator={row.creator}></CustomBanner>
          ) : null}
          <span>{row.title}</span>
        </TitleContainer>

        <BoardLabelContainer>
          <BoardLabel color={row.board.color}>{row.board.name}</BoardLabel>
        </BoardLabelContainer>

        <ValueTime>
          {row.value === "Unset" ? "-" : `${formatTime(row.value, timeFormat)}`}
        </ValueTime>
      </Row>
    </div>
  );
};
