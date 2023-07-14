import React, {useEffect, useState} from 'react';
import QuestionCard from "components/QuestionCard";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import {Checkbox, Modal, Pagination, Table} from 'antd';
import CountDown from "components/Timer/Timer";
import { Card } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import {Tab} from "@mui/material";
import Auth from "components/Auth/Auth";
import questions from "db/questions";
import {correctAnswers} from "db/correctAnswers";
import Chekbox from "components/CheckBox/Chekbox";
import User from "routes/user";
import CheckboxesAntd from "components/CheckBox/Chekbox";


const Quiz: React.FC = () => {

    const PAGE_SIZE=4;
    const [currentPage, setCurrentPage] = useState(1);
    const[totalPage, setTotalPage] = useState(0);
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)

    useEffect(()=> {
        setTotalPage(questions.length/PAGE_SIZE)
        setMaxIndex(PAGE_SIZE)
    }, [])

    useEffect(() => {
        const correctAnswers = questions.map((question) => question.answer);
        dispatch({type:'GET_CORRECT_ANSWERS_LIST', payload:correctAnswers});
    }, []);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = (page: number) => {
        setCurrentPage(page)
        setMinIndex((page-1)*PAGE_SIZE)
        setMaxIndex(page*PAGE_SIZE)
    }



    // const correctAnswerCount = useTypedSelector(state => state.add.correct)
    // const wrongAnswerCount = useTypedSelector(state => state.add.wrong)
    const selectedAnswers = useTypedSelector(state => state.add.selectedAnswers)

    const _ = require('LoDash');

    const correctAnswerCount = _.intersection(selectedAnswers, correctAnswers);
    console.log("The common elements are: " + correctAnswerCount);
    console.log(correctAnswerCount.length)
    const wrongAnswerCount =  questions.length - correctAnswerCount.length


    const [testChecked, setChecked] = useState(false);

    function chengeCheckbox() {
        setChecked(!testChecked);
    }

    const [disableCheckbox, setDisable] = useState(false)



    const dispatch = useDispatch()
    const answers = useSelector((state: any) => state.slectedAnswer)



    const [selected, setSelected] = useState(null);

    function onChangeTest(value:any) {
        setSelected((prev:any) => (value === prev ? null : value));
    }


    const changeHandler = (e:any) => {
        if(!e.target.checked){
            dispatch({type:"REMOVE_FROM_ANSWERS_LIST",payload:e.target.value})
            return
        }
        dispatch({type:'ADD_TO_ANSWERS_LIST',payload:e.target.value })

    }

    // const testResult = 0;
    // const testResultHandler = (e:any) => {
    //     correctAnswers.forEach((answer:string, index) => {
    //         if (answer === correctAnswers[index]) {
    //             state.correct++;
    //         } else {
    //             state.wrong++;
    //         }
    //
    // }

    // const changeHandler = (e:any) => {
    //
    //     const selectedAnswers:any = []
    //     if(!e.target.checked){
    //         selectedAnswers.push(e.target.value)
    //     }
    //
    //     console.log(selectedAnswers)
    // }




    // const toReduxTest = () => {
    //     dispatch({type:'ADD_TO_ANSWERS_LIST', payload:checkedValues})
    // }



    // const changeHandler = (e:any) => {
    //     e.preventDefault()
    //     dispatch({type:'ADD_TO_ANSWERS_LIST',payload:e.target.value })
    //
    // }



    // const result = () => {
    //     alert( `Колличество правильных ответов ${common.length}`)
    //     alert(`Колличество неправильных ответов ${correctAnswers.length - common.length}`)
    //     handleCheckboxChange()
    // }

    // setTimeout(result, 600000)

    const finish = () => {
        setDisable(true)
        showModal()
    }

    setTimeout(finish, 600000)





    return (

        <div>
            <>

                <User/>

                <CountDown hours={0} minutes={10} seconds={0} />

                <Modal title="Результаты"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                    <h3>Правильных ответов</h3>
                    <p> {correctAnswerCount.length} </p>
                    <h3>Неправильных ответов</h3>
                    <p> {wrongAnswerCount} </p>

                </Modal>

                {
                    questions?.length > PAGE_SIZE && (
                        <Pagination current={currentPage} pageSize={PAGE_SIZE} total={questions.length} onChange={handleChange}/>
                    )

                }

                <div>
                    {questions.map(({id, question, choices, }, index) => index >= minIndex && index < maxIndex && (
                        <Card key={id}>
                            <h2>{question}</h2>
                            {choices.map((value)=>
                                <Checkbox title={question}  disabled={disableCheckbox}  name={value}  key={value} value={value}   onChange={(e)=>{onChangeTest(e); changeHandler(e)}}>{value}</Checkbox>
                            )}

                        </Card>
                    ))}

                </div>


                {/*<div>*/}
                {/*    {questions.map(({id, question, choices, }, index) => index >= minIndex && index < maxIndex && (*/}
                {/*        <Card key={id}>*/}
                {/*            <h2>{question}</h2>*/}
                {/*            <Checkbox.Group options={choices} onChange={onChange}>*/}
                {/*                <Checkbox  onChange={(e)=>{onChangeTest(id)}}></Checkbox>*/}
                {/*            </Checkbox.Group>*/}
                {/*        </Card>*/}
                {/*    ))}*/}

                {/*</div>*/}




                <button onClick={()=>{finish()} }>TEST</button>



            </>
        </div>
    )
}

export default Quiz;
