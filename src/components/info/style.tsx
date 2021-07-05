import styled from "styled-components";

export const InfoContainer = styled("div")`
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
