import styled from "styled-components";

export const Row = styled("div")`
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

export const TimeElapsed = styled("div")`
  display: flex;
  width: clamp(30px, 45px, 65px);
  padding-right: 20px;
`;

export const BoardLabelContainer = styled("div")`
  width: fit-content;
  min-width: 100px;
  display: flex;
`;

export const BoardLabel = styled("div")`
  height: 24px;
  padding-left: 6px;
  padding-right: 6px;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: fit-content;
`;

export const ValueTime = styled("div")`
  margin-left: auto;
  padding-right: 10px;
  /* margin-left: 30px; */
`;

export const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  width: calc(100% / 2);
  position: relative;
`;

export const Avatar = styled("img")`
  width: 30px;
  border-radius: 20px;
  margin-right: 10px;
  border: 1px solid #f5f6f8;
`;
