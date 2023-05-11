import { NavLink } from "react-router-dom";

import "./Cage.css";

function Cage({ start }) {
  return (
    <NavLink to={`/chessboard/start/${start}`} className="cage">
      <p>{start}</p>
    </NavLink>
  );
}

export default Cage;
