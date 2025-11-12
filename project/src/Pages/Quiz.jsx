import React from "react";
function QuizPage() {
  return (
    <div className="content">
      <div className="question">What is the capital of France?</div>
      <div className="choiceGroup">
        <button type="button">A. London</button>
        <button type="button">B. Berlin</button>
        <button type="button">C. Paris</button>
        <button type="button">D. Madrid</button>
      </div>
    </div>
  );
}
export default QuizPage