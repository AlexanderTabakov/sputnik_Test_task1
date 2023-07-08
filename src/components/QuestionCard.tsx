import React from "react";
import Chk2 from "components/CheckBox/Chkx2";
import {useDispatch, useSelector} from "react-redux";
import {addToAnswersList} from "store/redusers/answers";
import {Checkbox} from "antd";
import Chekbox from "components/CheckBox/Chekbox";

interface Props {
    question: string;
    choices: string[];
    answer: string;
}
const QuestionCard: React.FC<Props> = (
    { question, choices, answer }) => {

    const dispatch = useDispatch()
    const answers = useSelector((state: any) => state.answer)
    const addToAnswerList = () => {
        dispatch({type: "ADD_TO_ANSWERS_LIST" , payload: choices})
    }

    const changeHandler = (e:any) => {
        if(!e.target.checked){
            dispatch({type:"REMOVE_FROM_ANSWERS_LIST",payload:e.target.value})
            return
        }
        dispatch({type:'ADD_TO_ANSWERS_LIST',payload:e.target.value })

    }
    return (
        <>
            <div>
                <h1>{question}</h1>

                {choices.map((choice)=>
                    <Checkbox key={answer} value={choice} onChange={changeHandler}>{choice}</Checkbox>
                )}


            </div>
        </>
    )
}
export default QuestionCard
