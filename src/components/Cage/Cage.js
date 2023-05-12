import { NavLink } from "react-router-dom";

import "./Cage.css";

function Cage({ start, posX, posY }) {
  return (
    <NavLink
      to={`/chessboard/start/${start}`}
      className="cage"
      posx={posX}
      posy={posY}
    >
      {start}
    </NavLink>
  );
}

export default Cage;
