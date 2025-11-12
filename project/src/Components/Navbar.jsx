import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <span>My Quiz App</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/QuizPage">Quiz</Link>
        <Link to="/ResultPage">Result</Link>
      </div>
    </nav>
  );
}
export default Navbar