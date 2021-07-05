import React, { useState } from "react";
import moment from "moment";

import { MondayItem } from "../../../types/esti.types";
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
  index: number;
}
export const TableRow = ({ row, index }: TableRowProps) => {
  moment.locale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s",
      s: "s",
      m: "1m",
      mm: "%dm",
      h: "1h",
      hh: "%dh",
      d: "1d",
      dd: "%dd",
      M: "1M",
      MM: "%dM",
      y: "1y",
      yy: "%dy",
    },
  });

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
          {moment(row.createdAt, "YYYYMMDDHHmmss").fromNow()}
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

        <ValueTime>{row.value === "Unset" ? "-" : `${row.value}`}</ValueTime>
      </Row>
    </div>
  );
};
