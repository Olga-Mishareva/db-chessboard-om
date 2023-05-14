import { Routes, Route } from "react-router-dom";

import "./App.css";
import Chessboard from "../Chessboard/Chessboard";
import NoMatch from "../NoMatch/NoMatch";

function App() {
  return (
    <div className="page">
      <header className="header"></header>
      <Routes>
        <Route path="/" element={<NoMatch />} />
        <Route path="/chessboard" element={<Chessboard />} />
        <Route path="/chessboard?start" element={<Chessboard />} />
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
