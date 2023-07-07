import React, {useEffect, useState} from 'react';
import Question from '../Question';
import question from "../Question";
import QuestionCard from "components/QuestionCard";
import Button from "components/Button/Button";

const questions = [
    {
        id: 1,
        question: 'Какая столица Франции? 1',
        choices: ['Париж', 'Бобруйск', 'Москва'],
        answer: 'Париж',
    },
    {
        id: 2,
        question: 'Какая столица России 2',
        choices: ['Бобруйск же', 'Москвабад', 'Малые плешки'],
        answer: 'Москвабад',
    },
    {
        id: 3,
        question: 'Какая столица России 3',
        choices: ['Бобруйск же', 'Москвабад', 'Малые плешки'],
        answer: 'Москвабад',
    },
    {
        id: 4,
        question: 'Какая столица России 4',
        choices: ['Бобруйск же', 'Москвабад', 'Малые плешки'],
        answer: 'Москвабад',
    },
    {
        id: 5,
        question: 'Какая столица России 5',
        choices: ['Бобруйск же', 'Москвабад', 'Малые плешки'],
        answer: 'Москвабад',
    },
    {
        id: 6,
        question: 'Какая столица России 6',
        choices: ['Бобруйск же', 'Москвабад', 'Малые плешки'],
        answer: 'Москвабад',
    },
    {
        id: 7,
        question: 'Какая столица России 7',
        choices: ['Бобруйск же', 'Москвабад', 'Малые плешки'],
        answer: 'Москвабад',
    },
    {
        id: 8,
        question: 'Какая столица России 8',
        choices: ['Бобруйск же', 'Москвабад', 'Малые плешки'],
        answer: 'Москвабад',
    },
];


const Quiz: React.FC = () => {



    return (
        <div>

            <div>
                {questions.map(({id, question, choices, answer}) =>
                    <QuestionCard
                        key={id}
                        question={question}
                        choices={choices}
                        answer={answer}
                    />

                )}
                {/*{questions.map(({id, question, choices, answer}) =>*/}
                {/*    <Question*/}
                {/*        key={id}*/}
                {/*        question={question}*/}
                {/*        choices={choices}*/}
                {/*        answer={answer}*/}
                {/*        onAnswer={handleAnswer}*/}
                {/*    />*/}

                {/*)}*/}
            </div>
            <Button children={'TEST'}/>
        </div>
    )
}

export default Quiz;
