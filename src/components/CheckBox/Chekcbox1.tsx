import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {CheckboxValueType} from "antd/es/checkbox/Group";



const answers:string[] = []
// const onChange = (e: CheckboxChangeEvent) => {
//     answers.push(`checked = ${e.target.name}`);
//     console.log(`checked = ${e.target.checked}`);
//     console.log(`checked =  ${e.target.checked}`);
//     console.log(answers)
// };

const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};


const Checkbox1: React.FC = ({children}) => <Checkbox.Group onChange={onChange}>{children}</Checkbox.Group>;

export default Checkbox1;
