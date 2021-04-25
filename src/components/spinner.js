import React from "react";
import styled from "styled-components";

import "monday-ui-react-core/dist/main.css";
import Loader from "monday-ui-react-core/dist/Loader.js";

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Loader svgClassName="loader-size-md" />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled("div")`
  max-height: 40px;
`;
