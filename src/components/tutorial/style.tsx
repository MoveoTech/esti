import styled from "styled-components";

export const TutorialContainer = styled("div")`
  width: 95%;
  background: #ffffff;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 15px;
  min-height: 260px;
  display: flex;
  flex-direction: column;

  .app-title {
    color: #401694;
  }
`;

export const CloseBtn = styled("div")`
  display: flex;
  margin-left: auto;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.1s ease-out;

  &:hover {
    background: #f5f6f8;
    cursor: pointer;
  }
  img {
  }
`;

export const ProgressWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .counter {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;

    .step {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;

export const ProgressBar = styled("div")<{ progress: number }>`
  border-radius: 60px;
  overflow: hidden;
  width: 50%;

  span {
    display: block;
  }

  .bar {
    background: #e6e9ef;
  }

  .progress {
    transition: all 1.5s ease-in-out;
    background: #00ca72;
    color: #fff;
    padding: 5px;
    width: ${(props) => (props.progress === 1 ? "47%" : "100%")};
  }
`;

export const StepOne = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17px;

  .title {
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 37px;
    font-weight: 500;
  }

  .text {
    margin-top: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    max-width: 430px;
  }
`;

export const StepTwo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17px;

  .text {
    margin-top: 6px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    max-width: 430px;

    .emphasis {
      color: #e2445c;
      font-weight: 600;
    }
  }

  img {
    margin-top: 15px;
    width: 70%;
    margin-bottom: 20px;
  }
`;

export const Footer = styled("div")`
  padding: 10px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NextBtn = styled("div")`
  background: #0085ff;
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: all 0.1s ease-out;

  span {
    color: white;
  }

  &:hover {
    background: #0071d9;
    cursor: pointer;
  }
`;

export const BackBtn = styled("div")`
  border-radius: 4px;
  padding: 8px 16px;
  transition: all 0.1s ease-out;

  &:hover {
    cursor: pointer;
    background: #f5f6f8;
  }
`;
