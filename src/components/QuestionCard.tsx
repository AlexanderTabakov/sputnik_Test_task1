import React from "react";
import Chk2 from "components/CheckBox/Chkx2";

interface Props {
    question: string;
    choices: string[];
    answer: string;
}
const QuestionCard: React.FC<Props> = (
    { question, choices, answer }) => {
    return (
        <>
            <div>
                <h1>{question}</h1>
                {choices.map((choice) => (
                    <Chk2 key={answer}>
                        {choice}
                    </Chk2>
                ))}


            </div>
        </>
    )
}
export default QuestionCard
