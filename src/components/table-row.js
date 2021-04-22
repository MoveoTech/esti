import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as moment from 'moment';
// import { Avatar } from "./avatar";

export const TableRow = ({ row }) => {

    moment.locale('en', {
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
            yy: "%dy"
        }
    });
    return (<div>
        <Row>
            <TimeElapsed>
                <img src="/assets/timeElapsedIcon.svg" className="icon"></img>
                {moment(row.createdAt, "YYYYMMDDHHmmss").fromNow()}
            </TimeElapsed>

            {/* <Avatar></Avatar> */}

            <BoardLabelContainer>
                <BoardLabel>
                    {row.board}
                </BoardLabel>
            </BoardLabelContainer>

            <ValueTime>
                {row.value}h
            </ValueTime>
        </Row>
    </div>
    );
}

const Row = styled("div")`
    height: 54px;
    border-bottom: 1px solid #C5C7CF;
    font-size: 14px;
    color: #323338;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 50px;

    .icon {
        margin-right: 4px;
        display: flex;
        height: 14.5px;
        width: 14.5px;
    }
`;


const TimeElapsed = styled("div")`
    display: flex;
    width: 45px;
`;

const BoardLabelContainer = styled("div")`
    width: 100px;
    margin-left: 30px;
`;

const BoardLabel = styled("div")`
    height: 24px;
    padding-left: 6px;
    padding-right: 6px;
    background-color: rgba(255, 203, 0, 0.3);;
    display: flex;
    align-items: center;
    border-radius: 4px;
    width: fit-content;
`;

const ValueTime = styled("div")`
    margin-left: 30px;
`;