import "./Chessboard.css";
import chessboardCages from "../constants/chessboard-cages";
import Cage from "../Cage/Cage";

function Chessboard() {
  return (
    <ul className="chessboard">
      {chessboardCages.map((cage) => (
        <li key={cage}>
          <Cage start={cage} />
        </li>
      ))}
    </ul>
  );
}

export default Chessboard;
