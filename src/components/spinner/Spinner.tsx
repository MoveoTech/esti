import React, { useEffect, useState } from "react";

import { SpinnerWrapper, Text } from "./style";

const loadingTitles = [
  "Fetching Items..",
  "Brewing Coffee..",
  "Estimating..",
  "Calculating Pi..",
  "Sorting Best Matches..",
];

export const Spinner = () => {
  const [counter, setCounter] = useState(0);

  // current title to render
  const title = loadingTitles[counter];

  useEffect(() => {
    const handleCounter = () => {
      setCounter(counter === loadingTitles.length - 1 ? 0 : counter + 1);
    };
    const timer = setTimeout(handleCounter, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <SpinnerWrapper>
      <div className="wrap">
        <div className="loading">
          <div className="bounceball"></div>
          <Text>{title}</Text>
        </div>
      </div>
    </SpinnerWrapper>
  );
};
