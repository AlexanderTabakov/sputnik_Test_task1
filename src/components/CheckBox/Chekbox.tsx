import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, {useState} from 'react';
import questions from "db/questions";

interface Props {
    question:string
    choices:string
}

const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};



const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
    { label: 'Вопрос1', value: 'Вопрос1' },
    { label: 'Вопрос2', value: 'Вопрос2' },
    { label: 'Вопрос3', value: 'Вопрос3' },
];
const valueFormApi:[] = []

const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];

const CheckboxesAntd: React.FC = ({children}) => (
    <>


        <Checkbox.Group options={options}  defaultValue={['']} onChange={onChange}  />
        <br />
        <br />
        <Checkbox.Group
            options={optionsWithDisabled}
            disabled
            defaultValue={['Apple']}
            onChange={onChange}
        />
    </>
);

export default CheckboxesAntd;
