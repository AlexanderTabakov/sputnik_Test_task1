import React, {useEffect, useState} from 'react';
import QuestionCard from "components/QuestionCard";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import {Checkbox, Modal, Pagination, Table} from 'antd';
import CountDown from "components/Timer/Timer";
import { Card } from 'antd';
import {Tab} from "@mui/material";
import Auth from "components/Auth/Auth";
import questions from "db/questions";
import {correctAnswers} from "db/correctAnswers";
import Chekbox from "components/CheckBox/Chekbox";
import User from "routes/user";


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

    // const {answers} = useTypedSelector(state => state.add)
    // console.log(answers)

    const _ = require('LoDash');

    // const common = _.intersection(answers, correctAnswers);
    // console.log("The common elements are: " + common);
    // console.log(common.length)


    const [checked, setChecked] = useState(true);

    function chengeCheckbox() {
        setChecked(!checked);
    }

    const [disableCheckbox, setDisable] = useState(false)



    const dispatch = useDispatch()
    const answers = useSelector((state: any) => state.answer)



    const [selected, setSelected] = useState(null);

    function onChangeTest(value:any) {
        setSelected((prev:any) => (value === prev ? null : value));
    }


    const changeHandler = (e:any) => {
        e.preventDefault()
        if(!e.target.checked){
            dispatch({type:"REMOVE_FROM_ANSWERS_LIST",payload:e.target.value})
            return
        }
        dispatch({type:'ADD_TO_ANSWERS_LIST',payload:e.target.value })

    }

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




    return (

        <div>
            <>

                <User/>

                <CountDown hours={0} minutes={10} seconds={0} />

                <Modal title="Результаты"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                    <p> ТУТ БУДУТ РЕЗУЛЬТАТЫ </p>

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
                            {choices.map((value, index, array)=>
                                <Checkbox title={question}  disabled={disableCheckbox} checked={value===selected} key={value} value={value}   onChange={(e)=>{onChangeTest(value); changeHandler(e)}}>{value}</Checkbox>
                            )}

                        </Card>
                    ))}

                </div>

                {/*<div>*/}
                {/*    {questions.map(({id, question, choices, }, index) => index >= minIndex && index < maxIndex && (*/}
                {/*        <Card key={question}>*/}
                {/*            <h2>{question}</h2>*/}
                {/*            {choices.map((choice)=>*/}
                {/*                <Checkbox title={question} disabled={disableCheckbox}    key={index} value={choices}   onChange={changeHandler}>{choice}</Checkbox>*/}
                {/*            )}*/}

                {/*        </Card>*/}
                {/*    ))}*/}

                {/*</div>*/}


                <button onClick={()=>{setDisable(true); showModal()} }>TEST</button>



            </>
        </div>
    )
}

export default Quiz;
