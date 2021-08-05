import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {API} from "aws-amplify"
import {getCode} from '../graphql/queries';

const Code = () => {

    let {id} = useParams();

    const [code, setCode] = useState([]);

    useEffect(() => {
        fetchCode()
    }, [])

    const fetchCode = async () => {
        const codeData = await API.graphql({query: getCode, variables: {id: id}})
        console.log("code data" + codeData)
        setCode(codeData.data.getCode)
    }
    
    return (
        <div>
            <h1>{code.number}. {code.problem}</h1>
            <p>{code.solution}</p>
        </div>
    );
};

export default Code;