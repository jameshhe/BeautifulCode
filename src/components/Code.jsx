import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {API} from "aws-amplify"
import {getCode} from '../graphql/queries';
// import { CodeBlock, nord } from "react-code-blocks";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

const Code = () => {

    let {id} = useParams();

    // const [code, setCode] = useState([]);
    const [code, setCode] = useState(
        `function add(a, b) { return a + b;\n}`
      );

    // useEffect(() => {
    //     fetchCode()
    // }, [])

    // const fetchCode = async () => {
    //     const codeData = await API.graphql({query: getCode, variables: {id: id}})
    //     console.log(codeData)
    //     setCode(codeData.data.getCode)
    // }
    
    return (
        <div>
            {/* <h1>{code.number}. {code.problem}</h1>
            <p className="code-description">{code.description}</p>
            <p className="code-description">Beauty: {code.beauty} </p> */}
            {/* <pre class="line-numbers">
                <code class="language-css">
                    {code.solution}
                </code>
            </pre> */}
            {/* <div className="container mx-auto p-4">
                <CodeBlock
                    language={"python"}
                    text={code.solution}
                    theme={nord}
                    wrapLines={true}
                    codeBlock
                />
            </div> */}
            <Editor
                value={code}
                onValueChange={(code) => setCode(code)}
                highlight={(code) => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
                className="wrapline"
            />
            {console.log(code)}
            
        </div>
    );
};

export default Code;