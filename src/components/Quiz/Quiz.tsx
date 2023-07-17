import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import {Checkbox, Modal, Pagination} from 'antd';
import CountDown from "components/Timer/Timer";
import { Card } from 'antd';
import questions from "db/questions";
import {correctAnswers} from "db/correctAnswers";
import User from "routes/user";
import {IdefaultState} from "store/redusers/answers";


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


    const selectedAnswers = useTypedSelector(state => state.add.selectedAnswers)

    const _ = require('LoDash');

    const correctAnswerCount = _.intersection(selectedAnswers, correctAnswers);
    const wrongAnswerCount =  questions.length - correctAnswerCount.length



    const [disableCheckbox, setDisable] = useState(false)



    const dispatch = useDispatch()
    const answers = useSelector((state: IdefaultState) => state.selectedAnswers)



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



                <button onClick={()=>{finish()} }>TEST</button>



            </>
        </div>
    )
}

export default Quiz;
