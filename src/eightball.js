import React, { useState } from "react";
import defaultAnswers from "./answers.json"

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        mesg: "Think of a question",
        color: "black",
    });

    function handlerClick(event) {
        setAnswer(choice(answers));
    }

    return (
        <div
            className="EightBall" onClick={handleClick}
            style={{ backgroundColor: answer.color }}>
            <b>{answer.msg}</b>
        </div>
    );
}

export default EightBall;