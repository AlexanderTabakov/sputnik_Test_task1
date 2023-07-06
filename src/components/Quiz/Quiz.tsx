import React, { useState } from 'react';
import Question from '../Question';
import question from "../Question";

const questions = [
    {
        id: 1,
        question: 'What is the capital of France? 1',
        choices: ['Paris', 'London', 'New York'],
        answer: 'Paris',
    },
    {
        id: 2,
        question: 'What is the largest planet in our solar system? 2',
        choices: ['Mars', 'Jupiter', 'Venus'],
        answer: 'Jupiter',
    },
    {
        id: 3,
        question: 'What is the boiling point of water? 3',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },
    {
        id: 4,
        question: 'What is the largest planet in our solar system? 4',
        choices: ['Mars', 'Jupiter', 'Venus'],
        answer: 'Jupiter',
    },
    {
        id: 5,
        question: 'What is the boiling point of water? 5',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },{
        id: 6,
        question: 'What is the boiling point of water? 6',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },{
        id: 7,
        question: 'What is the boiling point of water? 7',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },{
        id: 8,
        question: 'What is the boiling point of water? 8',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },{
        id: 9,
        question: 'What is the boiling point of water? 9',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },{
        id: 10,
        question: 'What is the boiling point of water? 10',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },
];

const Quiz: React.FC = () => {
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [score, setScore] = useState(0);
    //
    const handleAnswer = (answer: string) => {
        if (answer === answer) {
            alert('ЗБС работет');
        }
    }
    //
    //     const nextQuestion = currentQuestion + 1;
    //     if (nextQuestion < questions.length) {
    //         setCurrentQuestion(nextQuestion);
    //     } else {
    //         alert(`Quiz finished. You scored ${score}/${questions.length}`);
    //     }
    // };

    return (
        <div>
            {/*<h1 className="text-center">Quiz App</h1>*/}
            {/*{currentQuestion < questions.length ? (*/}
            {/*    <Question*/}
            {/*        question={questions[currentQuestion].question}*/}
            {/*        choices={questions[currentQuestion].choices}*/}
            {/*        answer={questions[currentQuestion].answer}*/}
            {/*        onAnswer={handleAnswer}*/}
            {/*    />*/}
            {/*) : "null"*/}
            {/*}*/}
            <div>
                {questions.map(({id, question, choices, answer}) =>
                    <Question
                        key={id}
                        question={question}
                        choices={choices}
                        answer={answer}
                        onAnswer={handleAnswer}
                    />

                )}
            </div>
            <button>TEST</button>
        </div>
    )
}

export default Quiz;
