import "./Chessboard.css";
import {
  chessboardHorizontal,
  chessboardHVertical,
} from "../constants/chessboard-cages";
import Cage from "../Cage/Cage";

function Chessboard() {
  return (
    <ul className="chessboard">
      {chessboardHorizontal.map((column) => {
        return chessboardHVertical.map((row, i) => (
          <li className="chessboard__item" key={`${column}${row}`}>
            <Cage start={`${column}${row}`} posX={column} posY={i + 1} />
          </li>
        ));
      })}
    </ul>
  );
}

export default Chessboard;
