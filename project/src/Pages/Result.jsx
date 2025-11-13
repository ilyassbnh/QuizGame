import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ResultPage() {
    const  Nav = useNavigate()
    const local = useLocation()
    const score = local.state?.score || 0 
    const total = local.state?.total || 10
  return (
    <div className="page-content">
      <h1>Your Results</h1>
      <p>You scored {score} out of {total}</p>
      <button className="start-button" onClick={()=>Nav('/')}>Back Home</button>
    </div>
  );
}
export default ResultPage