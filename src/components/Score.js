import React from "react";

export default function Score(props) {

    return (
        <div>  
            <div className="score">Score: {props.score}</div>
            <div> Best score: {props.bestScore}</div>
        </div>
    )
}