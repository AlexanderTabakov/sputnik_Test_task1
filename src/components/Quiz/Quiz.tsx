import React, {useEffect, useState} from 'react';
import QuestionCard from "components/QuestionCard";
import Button from "components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import {Pagination, Table} from 'antd';
import { Card } from 'antd';
import {Tab} from "@mui/material";

const questions = [
    {
        id: 1,
        question: 'Какая столица Франции? 1',
        choices: ['Париж', 'Бобруйск', 'Москвабад'],
        answer: 'Париж',
    },
    {
        id: 2,
        question: 'Какая столица России',
        choices: ['Бобруйск же', 'Москва', 'Васюки'],
        answer: 'Москва',
    },
    {
        id: 3,
        question: 'Какая столица Казахстана',
        choices: ['Нур-Султан', 'Астана', 'Малые плешки'],
        answer: 'Астана',
    },
    {
        id: 4,
        question: 'Какая столица АСАШАЙ',
        choices: ['Нью-Йорк', 'Вашингтон', 'Лос-Анджелес'],
        answer: 'Вашингтон',
    },
    {
        id: 5,
        question: 'Какая Столица Германии',
        choices: ['Берлин', 'Штутгард', 'Кельн'],
        answer: 'Берлин',
    },
    {
        id: 6,
        question: 'Какая столица Турции',
        choices: ['Стамбул', 'Анкара', 'Александрия'],
        answer: 'Анкара',
    },
    {
        id: 7,
        question: 'Какая столица Лихтенштейна',
        choices: ['Вадуц', 'Шан', 'Алмата'],
        answer: 'Вадуц',
    },
    {
        id: 8,
        question: 'Что больше всего не нравится во фронте',
        choices: ['TS', 'JS', 'Все супер, учиться надо было лучше'],
        answer: 'Все супер, учиться надо было лучше',
    },
];


const correctAnswers:string[] = ['Париж', 'Москва', 'Астана', 'Вашингтон', 'Берлин', 'Анкара', 'Вадуц', 'Все супер, учиться надо было лучше' ]


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

    const [activeCheckbox, setActiveCheckbox] = useState(null);



    const result = () => {
        alert( `Колличество правильных ответов ${common.length}`)
        alert(`Колличество неправильных ответов ${correctAnswers.length - common.length}`)
        handleCheckboxChange()
    }

    return (

        <div>
            <>

                <Pagination simple pageSize={1} defaultCurrent={1} total={50} />
                {/*<Pagination*/}
                {/*    total={5}*/}
                {/*    showSizeChanger*/}
                {/*    showQuickJumper*/}
                {/*    showTotal={(total) => `Total ${total} items`}*/}
                {/*/>*/}


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
                {/*<Button children={'TEST'}/>*/}

            </>
        </div>
    )
}

export default Quiz;
