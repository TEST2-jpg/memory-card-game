import React from "react";

export default function Score(props) {

    return (
        <div className="score">  
            <div>Score: {props.score}</div>
            <div> Best score: {props.bestScore}</div>
        </div>
    )
}