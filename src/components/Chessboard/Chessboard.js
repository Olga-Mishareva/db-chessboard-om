import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Chessboard.css";
import Cage from "../Cage/Cage";
import { verticalMatch } from "../../constants/chessboard-cages";

function Chessboard() {
  const [params, _] = useSearchParams();
  const [currentPosition, setCurrentPosition] = useState({});
  const [nextSteps, setNextSteps] = useState([]);
  const [cages, setCages] = useState([]);

  function handleCages() {
    let chessboard = [];
    let x = 1;
    let y = 8;
    for (let i = 1; i < 65; i++) {
      if (x > 8) {
        x = 1;
        y--;
      }
      chessboard = [...chessboard, { posX: x, posY: y }];
      x++;
    }
    setCages(chessboard);
  }

  useEffect(() => {
    if (params.get("start")) {
      setCurrentPosition({
        posX: verticalMatch[params.get("start").slice(0, 1)],
        posY: Number(params.get("start").slice(1)),
      });
    }
    handleCages();
  }, [params]);

  function handlePosition(posX, posY) {
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

  return (
    <ul className="chessboard">
      {cages.map((cage) => (
        <li key={`${cage.posY}${cage.posX}`}>
          <Cage
            startPosition={`${Object.entries(verticalMatch)[cage.posX - 1][0]}${
              cage.posY
            }`}
            posX={cage.posX}
            posY={cage.posY}
            nextSteps={nextSteps}
            handlePosition={handlePosition}
            isDark={
              (cage.posX % 2 === 0 && cage.posY % 2 === 0) ||
              (cage.posX % 2 !== 0 && cage.posY % 2 !== 0)
                ? true
                : false
            }
          />
        </li>
      ))}
    </ul>
  );
}

export default Chessboard;
