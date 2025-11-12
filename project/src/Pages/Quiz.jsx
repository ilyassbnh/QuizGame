import React from "react";
import questions from "../data/Questions";
import { useState } from "react";

function QuizPage() {
        const [count , setCount ] = useState(0)
        const nextOption = count +1

        if( nextOption < options.length){
            setCount(nextOption)
        }


    return (
        <div className="content">
            <div className="question">{questions[0].question}</div>
            <div className="choiceGroup">
                {questions[1].options.map((option,i) => (
                    <button key={i}> {option} </button>
                ))}
            </div>
        </div>
    );
}
export default QuizPage