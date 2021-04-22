import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const OverviewPart = ({data}) => {
    return (
        <div>
            <Title>Overview</Title>
            <OverviewData>
                <Matches>{`${data.total} Total Matches`}</Matches>
                <CalcField>{`${data.average} Avg`}</CalcField>
                <CalcField>{`${data.median} Med`}</CalcField>
            </OverviewData>
        </div>
    );
}

const Title = styled("div")`
    color: #FDAB3D;
    font-size: 18px;
`;

const OverviewData = styled("div")`
    background: #F5F6F8;
    width: 100%;
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
