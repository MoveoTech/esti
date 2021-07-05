import React from "react";

import { InfoContainer } from "./style";

interface InfoProps {
  openTutorial: () => void;
}

const Info = ({ openTutorial }: InfoProps) => {
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
