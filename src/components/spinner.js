import React from "react";
import styled from "styled-components";

import "monday-ui-react-core/dist/main.css";
import Loader from "monday-ui-react-core/dist/Loader.js";

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Loader svgClassName="loader-size-sm" />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled("div")`
  height: 100%;
  .monday-loader-component {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circle-loader-spinner {
    position: relative;
    top: 0 !important;
    left: 0 !important;
    margin-left: 0 !important;
    margin-top: 0 !important;
    height: 50px !important;
  }
`;
