import React, {useEffect, useState} from 'react';
import QuestionCard from "components/QuestionCard";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import {Pagination, Table} from 'antd';
import CountDown from "components/Timer/Timer";
import { Card } from 'antd';
import {Tab} from "@mui/material";
import Auth from "components/Auth/Auth";
import questions from "db/questions";
import {correctAnswers} from "db/correctAnswers";


const Quiz: React.FC = () => {



    const {answers} = useTypedSelector(state => state.add)
    console.log(answers)

    const _ = require('LoDash');

    const common = _.intersection(answers, correctAnswers);
    console.log("The common elements are: " + common);
    console.log(common.length)


    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const result = () => {
        alert( `Колличество правильных ответов ${common.length}`)
        alert(`Колличество неправильных ответов ${correctAnswers.length - common.length}`)
        handleCheckboxChange()
    }

    setTimeout(result, 600000)

    return (

        <div>
            <>

                <Auth/>

                <CountDown hours={0} minutes={10} seconds={0} />

                <Pagination simple pageSize={5} defaultCurrent={1} total={questions.length}/>

                <div>
                    {questions.map(({id, question, choices, answer}) =>

                        <QuestionCard
                            key={id}
                            question={question}
                            choices={choices}
                            answer={answer}
                            // isDisabled={!result}
                            isDisabled={isChecked}

                        />
                    )}
                </div>

                <button onClick={result}>TEST</button>



            </>
        </div>
    )
}

export default Quiz;
