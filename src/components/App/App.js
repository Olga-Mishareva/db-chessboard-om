import { Routes, Route } from "react-router-dom";

import "./App.css";
import Chessboard from "../Chessboard/Chessboard";

function App() {
  return (
    <div className="page">
      <header className="header"></header>
      <Routes>
        <Route path="/chessboard" element={<Chessboard />} />
        <Route path="/chessboard?start=" element={<Chessboard />} />
        <Route path="*" element={<p>404</p>}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
