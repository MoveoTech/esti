import React from "react";
import styled from "styled-components";
import * as moment from "moment";

export const TableRow = ({ row }) => {
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

        {/* <Avatar></Avatar> */}
        <TitleContainer>
          <Avatar src={row.creator.photo} />
          <span>{row.title}</span>
        </TitleContainer>

        <BoardLabelContainer>
          <BoardLabel>{row.board}</BoardLabel>
        </BoardLabelContainer>

        <ValueTime>
          {row.value === "Unset" ? row.value : `${row.value}h`}
        </ValueTime>
      </Row>
    </div>
  );
};

const Row = styled("div")`
  height: 54px;
  border-bottom: 1px solid #c5c7cf;
  font-size: 14px;
  color: #323338;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    margin-right: 4px;
    display: flex;
    height: 14.5px;
    width: 14.5px;
  }
`;

const TimeElapsed = styled("div")`
  display: flex;
  width: clamp(30px, 45px, 65px);
  padding-right: 20px;
`;

const BoardLabelContainer = styled("div")`
  width: fit-content;
  min-width: 100px;
  display: flex;
  justify-content: center;
`;

const BoardLabel = styled("div")`
  height: 24px;
  padding-left: 6px;
  padding-right: 6px;
  background-color: rgba(255, 203, 0, 0.3);
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: fit-content;
`;

const ValueTime = styled("div")`
  margin-left: auto;
  padding-right: 10px;
  /* margin-left: 30px; */
`;

const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  width: calc(100% / 2);
`;

const Avatar = styled("img")`
  height: 30px;
  border-radius: 20px;
  margin-right: 10px;
  border: 1px solid #f5f6f8;
`;
