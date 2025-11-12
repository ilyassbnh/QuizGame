import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="page-content">
      <h1>Welcome to the Quiz!</h1>
      <p>Click "Quiz" in the navigation to start.</p>
      <Link to="/QuizPage" className="start-button">Start Quiz</Link>
    </div>
  );
}
export default HomePage