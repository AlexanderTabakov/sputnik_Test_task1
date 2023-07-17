import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToAnswersList} from "store/redusers/answers";
import {Checkbox,Card} from "antd";

// interface Props {
//     question: string;
//     choices: string[];
//     answer: string;
// }

export interface ITest {
    question: string;
    choices: string[];
    answer: string;
    isDisabled:boolean
    isChecked?:boolean
}


const QuestionCard: React.FC<ITest> = (
    { question, choices, answer, isDisabled ,isChecked }) => {



    const dispatch = useDispatch()
    const answers = useSelector((state: any) => state.answer)



    const [selected, setSelected] = useState(null);

    function onChangeTest(i:any) {
        setSelected((prev:any) => (i === prev ? null : i));
    }



    const changeHandler = (e:any) => {
        e.preventDefault()
        if(!e.target.checked){
            dispatch({type:"REMOVE_FROM_ANSWERS_LIST",payload:e.target.value})
            return
        }
        dispatch({type:'ADD_TO_ANSWERS_LIST',payload:e.target.value })

    }


    return (
        <>


            <Card>
                <h1>{question}</h1>
                {choices.map((choice, i)=>
                    <Checkbox title={question}  checked={i===selected} disabled={isDisabled}  key={choice} value={choice}   onChange={(e)=>{onChangeTest(i); changeHandler(e)}}>{choice}</Checkbox>
                )}

            </Card>


        </>
    )
}
export default QuestionCard
