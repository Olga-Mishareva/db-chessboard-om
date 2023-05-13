import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Cage.css";

function Cage({ startPosition, posX, posY, nextSteps, handlePosition }) {
  const [params, setParams] = useSearchParams();
  const [isPossible, setIsPossible] = useState(false);

  useEffect(() => {
    nextSteps.forEach((step) => {
      if (step.stepX === posX && step.stepY === posY) {
        console.log(posX, posY);
        setIsPossible(true);
      }
    });
  }, [nextSteps, startPosition]);

  useEffect(() => {
    setIsPossible(false);
  }, [params]);

  function handleParams() {
    setParams({ start: startPosition });
  }

  return (
    <button
      className={`cage ${
        params.get("start") === startPosition ? "cage--start" : ""
      } ${isPossible ? "cage--next" : ""}`}
      onClick={() => {
        handlePosition(posX, posY);
        handleParams();
      }}
    >
      {startPosition}
    </button>
  );
}

export default Cage;
