import React from 'react';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import {useDispatch, useSelector} from "react-redux";



const selectedAnswers:Array<any> = []
const onChange = (checkedValues: CheckboxValueType[]) => {
    // const dispatch = useDispatch()
    // const answers = useSelector((state: any) => state.answer)
    // const addToAnswerList = () => {
    //     dispatch({type: "ADD_TO_ANSWERS_LIST" , payload: checkedValues})
    // }
    console.log('checked = ', checkedValues);
    selectedAnswers.push(...checkedValues)
    console.log(selectedAnswers)

};

// const dispatch = useDispatch()
// const answers = useSelector((state: any) => state.answer)
// const addToAnswerList = () => {
//
//
// }



const Chk2: React.FC = ({children}) =>{



    return (
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <Checkbox  value={children}>{children}</Checkbox>
        </Checkbox.Group>
    );
}

export default Chk2
