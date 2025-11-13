import React, { use } from "react";
import questions from "../data/Questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizPage() {

    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const navigate = useNavigate()


    //gestion des click des opitons
    const answerClick = (value) => {

        //verification des choix
        if (count < questions.length - 1) {
            if (value === questions[count].answer) {
                setScore(score => score + 1)
            }
            //next question count
            setCount(count => count + 1)

        } else {
            navigate('/ResultPage',{state:{ score: score +(value===questions[count].answer ? 1 : 0),total:questions.length}})
        }

    }


    return (
        <div className="content">
            <div className="question">{questions[count].question}</div>
            <div className="choiceGroup">
                {questions[count].options.map((option, i) => (
                    <button key={i} onClick={() => answerClick(option)}> {option} </button>
                ))}
            </div>
        </div>
    );
}
export default QuizPage