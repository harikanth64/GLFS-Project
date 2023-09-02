import React, { useEffect, useState } from 'react'

export function Cell({ value, onChange }) {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    const [arrayValue, setArrayValue] = useState([])


    const result = Object.keys(value).map(key => ({[key]: value[key]}));

    console.log(result);
    useEffect(() => {

        // Object.keys(value).forEach(key => arrayValue.push({name: key, value: value[key]}))
        // console.log(arrayValue[0].name, arrayValue[0].value);



        setText(value);
    }, [value]); // <--- when value is changed text state is changed too


    

}


