import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const TablePart = () => {
    return (
        <div>
            <Title>Best Matches</Title>
        </div>
    );
}

const Title = styled("div")`
    color: #5559DF;
    font-size: 18px;
    margin-top: 24px;
`;
