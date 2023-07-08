import React from "react";
import Chk2 from "components/CheckBox/Chkx2";
import {useDispatch, useSelector} from "react-redux";
import {addToAnswersList} from "store/redusers/answers";
import {Checkbox} from "antd";
import Chekbox from "components/CheckBox/Chekbox";

// interface Props {
//     question: string;
//     choices: string[];
//     answer: string;
// }

interface ITest {
    question: string;
    choices: string[];
    answer: string;
    isDisabled:boolean
}
const QuestionCard: React.FC<ITest> = (
    { question, choices, answer, isDisabled }) => {

    const dispatch = useDispatch()
    const answers = useSelector((state: any) => state.answer)

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
                    <Checkbox disabled={isDisabled} key={choice} value={choice} onChange={changeHandler}>{choice}</Checkbox>
                )}


            </div>
        </>
    )
}
export default QuestionCard
