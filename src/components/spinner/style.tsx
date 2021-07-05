import styled from "styled-components";

export const SpinnerWrapper = styled("div")`
  margin-top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading {
    width: 100%;
    margin-left: 120px;
  }

  .bounceball {
    position: relative;
    display: inline-block;
    height: 28px;
    width: 15px;
    &:before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #0085ff;
      transform-origin: 50%;
      animation: bounce 500ms alternate infinite ease;
    }
  }

  @keyframes bounce {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      transform: scaleX(2);
      background-color: #0085ff;
    }
    35% {
      height: 15px;
      border-radius: 50%;
      transform: scaleX(1);
      background-color: #00ca72;
    }

    100% {
      top: 0;
      background-color: #00ca72;
    }
  }
`;

export const Text = styled("div")`
  transition: all 0.3s ease-out;
  color: #00ca72;
  display: inline-block;
  margin-left: 15px;
  width: 250px;
  padding-bottom: 20px;
`;
