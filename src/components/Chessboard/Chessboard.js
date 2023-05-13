import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Chessboard.css";
import Cage from "../Cage/Cage";
import {
  chessboardHorizontal,
  chessboardHVertical,
  verticalMatch,
} from "../constants/chessboard-cages";

function Chessboard() {
  const [params, _] = useSearchParams();
  const [currentPosition, setCurrentPosition] = useState({});
  const [nextSteps, setNextSteps] = useState([]);

  useEffect(() => {
    setCurrentPosition({
      posX: verticalMatch[params.get("start").slice(0, 1)],
      posY: Number(params.get("start").slice(1)),
    });
  }, []);

  function handlePosition(posX, posY) {
    console.log(posX, posY);
    setCurrentPosition({
      posX: posX,
      posY: posY,
    });
  }

  useEffect(() => {
    setNextSteps([
      { stepX: currentPosition.posX + 1, stepY: currentPosition.posY + 2 },
      { stepX: currentPosition.posX + 1, stepY: currentPosition.posY - 2 },
      { stepX: currentPosition.posX - 1, stepY: currentPosition.posY + 2 },
      { stepX: currentPosition.posX - 1, stepY: currentPosition.posY - 2 },
      { stepX: currentPosition.posX + 2, stepY: currentPosition.posY + 1 },
      { stepX: currentPosition.posX + 2, stepY: currentPosition.posY - 1 },
      { stepX: currentPosition.posX - 2, stepY: currentPosition.posY + 1 },
      { stepX: currentPosition.posX - 2, stepY: currentPosition.posY - 1 },
    ]);
  }, [currentPosition]);

  console.log(nextSteps);

  console.log(currentPosition);

  return (
    <ul className="chessboard">
      {chessboardHorizontal.map((column) => {
        return chessboardHVertical.map((row, i) => (
          <li className="chessboard__item" key={`${row}${column}`}>
            <Cage
              startPosition={`${row}${column}`}
              posX={i + 1}
              posY={column}
              nextSteps={nextSteps}
              handlePosition={handlePosition}
            />
          </li>
        ));
      })}
    </ul>
  );
}

export default Chessboard;
