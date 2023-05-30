import { Routes, Route } from "react-router-dom";

import "./App.css";
import Chessboard from "../Chessboard/Chessboard";
import NoMatch from "../NoMatch/NoMatch";

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1>Mögliche Züge eines Springers</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NoMatch />} />
          <Route path="/chessboard" element={<Chessboard />} />
          <Route path="/chessboard?start" element={<Chessboard />} />
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </main>
      <footer className="footer">OM</footer>
    </div>
  );
}

export default App;
