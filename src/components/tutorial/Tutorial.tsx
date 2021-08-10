import React, { useState } from "react";
import {
  TutorialContainer,
  CloseBtn,
  ProgressBar,
  ProgressWrapper,
  StepOne,
  StepTwo,
  Footer,
  NextBtn,
  BackBtn,
  Disclaimer,
} from "./style";

interface TutorialProps {
  finishTutorial: () => void;
}

const Tutorial = ({ finishTutorial }: TutorialProps) => {
  const [step, setStep] = useState(1);

  const renderBack = () => {
    return step !== 1 ? (
      <BackBtn onClick={() => setStep(1)}>
        <span>Back</span>
      </BackBtn>
    ) : null;
  };

  const renderNext = () => {
    return step === 1 ? (
      <NextBtn onClick={() => setStep(2)}>
        <span>Next</span>
      </NextBtn>
    ) : (
      <NextBtn onClick={() => finishTutorial()}>
        <span>Understood!</span>
      </NextBtn>
    );
  };

  const renderFooter = () => {
    return (
      <Footer>
        {renderBack()} {renderNext()}
      </Footer>
    );
  };

  const renderContent = () => {
    return step === 1 ? (
      <StepOne>
        <span className="title">Introduction</span>
        <span className="text">
          <span className="app-title">Esti</span> searches for similar item
          titles across your workspaces. Relevant matches will be displayed with
          extra information that might assist with task execution.
        </span>
      </StepOne>
    ) : (
      <StepTwo>
        <span className="text">
          <span className="app-title">Esti</span> can only assist you if your
          time estimation column is <span className="emphasis">numeric</span>{" "}
          and its name includes <span className="emphasis">"Actual Days"</span>{" "}
          or <span className="emphasis">"Actual Hours"</span>.
          <br />
        </span>
        <img
          className="tutorial-img"
          src={`/assets/tutorial.gif`}
          alt="tutorial gif"
        />
        <Disclaimer>
          <img src={`/assets/info-icon.svg`} alt="info" />
          <span className="disclaimer-text">
            Please note that for calculation purposes - a day equals 9 hours.
          </span>
        </Disclaimer>
      </StepTwo>
    );
  };

  return (
    <TutorialContainer>
      <CloseBtn onClick={() => finishTutorial()}>
        <img src={`/assets/close-btn.svg`} alt="close" />
      </CloseBtn>
      <ProgressWrapper>
        <div className="counter">
          <span className="step">{step}</span> / 2
        </div>
        <ProgressBar progress={step}>
          <span className="bar">
            <span className="progress"></span>
          </span>
        </ProgressBar>
        {renderContent()}
      </ProgressWrapper>
      {renderFooter()}
    </TutorialContainer>
  );
};

export default Tutorial;
