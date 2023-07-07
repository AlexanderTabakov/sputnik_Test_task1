import React from 'react';
import Checkbox1 from "components/CheckBox/Chekcbox1";
import CheckboxesAntd from "components/CheckBox/Chekbox";

interface Props {
    question: string;
    choices: string[];
    answer: string;
    onAnswer: (answer: string) => void;
}

const Question: React.FC<Props> = (
    { question, choices, answer,onAnswer }) => {
    return (

        <>

            <div className="d-flex
                        justify-content-center
                        align-center
                        text-center
                        flex-column">
                <h2 className="">{question}</h2>

                {choices.map((choice) => (
                    <input type='checkbox' value={choice} />
                ))}


                {/*{choices.map((choice) => (*/}
                {/*    <Checkbox1 children={choice} key={choice}/>*/}
                {/*))}*/}

                {/*<CheckboxesAntd />*/}



            </div>
        </>
    );
};

export default Question;
