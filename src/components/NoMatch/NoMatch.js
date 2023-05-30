import { Link } from "react-router-dom";

import "./NoMatch.css";

function NoMatch() {
  return (
    <div className="no-match">
      <Link to="/chessboard?start" className="link">
        To Chessboard →
      </Link>
    </div>
  );
}

export default NoMatch;
