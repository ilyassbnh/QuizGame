import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ResultPage() {
  const Nav = useNavigate()
  const local = useLocation()
  const score = local.state?.score || 0
  const total = local.state?.total || 10
  let message;

  if (score < 5) {
    message = "Better luck next time"
  } else if (score <= 7) {
    message = "Good"
  } else {
    message = "Exellent"
  }



  return (
    <div className="page-content">
      <h1>{message}</h1>

      <p>You scored {score} out of {total}</p>
      <button className="start-button" onClick={() => Nav('/')}>Back Home</button>
    </div>
  );
}
export default ResultPage