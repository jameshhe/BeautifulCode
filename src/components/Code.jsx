import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {API} from "aws-amplify"
import {getCode} from '../graphql/queries';
import { CodeBlock, dracula } from "react-code-blocks";

const Code = () => {

    let {id} = useParams();

    const [code, setCode] = useState([]);

    useEffect(() => {
        fetchCode()
    }, [])

    const fetchCode = async () => {
        const codeData = await API.graphql({query: getCode, variables: {id: id}})
        console.log(codeData)
        setCode(codeData.data.getCode)
    }
    
    return (
        <div>
            <h1>{code.number}. {code.problem}</h1>
            <p className="code-description">{code.description}</p>
            <p className="code-description">Beauty: {code.beauty} </p>
            {/* <pre class="line-numbers">
                <code class="language-css">
                    {code.solution}
                </code>
            </pre> */}
            <div className="container mx-auto p-4">
                <CodeBlock
                    language={"python"}
                    text={code.solution}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            
        </div>
    );
};

export default Code;