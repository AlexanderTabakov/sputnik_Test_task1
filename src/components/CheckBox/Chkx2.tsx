import React from 'react';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';


const answers:Array<any> = []
const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
    answers.push(...checkedValues)
    console.log(answers)

};




const Chk2: React.FC = ({children}) => (
    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        <Checkbox value={children}>{children}</Checkbox>
    </Checkbox.Group>
);

export default Chk2
