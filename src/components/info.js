import React from "react";
import styled from "styled-components";

const Info = ({ openTutorial }) => {
  return (
    <InfoContainer>
      <img src={`/assets/info-icon.svg`} alt="info" />
      <span
        className="info-text"
        onClick={() => {
          openTutorial();
        }}
      >
        Not seeing any results?
      </span>
    </InfoContainer>
  );
};

export default Info;

const InfoContainer = styled("div")`
  display: flex;
  align-items: center;

  .info-text {
    color: #808185;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    transition: all 0.5 ease-in-out;
    margin-left: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    &:hover {
      cursor: pointer;
      color: #808185e0;
    }
  }
`;
