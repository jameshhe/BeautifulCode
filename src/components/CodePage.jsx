import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getCode } from "../graphql/queries";
import Loading from "./Loading";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const CodePage = () => {
  let { id } = useParams();

  const [code, setCode] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchCode();
    Prism.highlightAll();
  }, []);

  const fetchCode = async () => {
    const codeData = await API.graphql({
      query: getCode,
      variables: { id: id },
    });
    console.log(codeData);
    setCode(codeData.data.getCode);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>
            {code.number}. {code.problem}
          </h1>
          <p className="code-description">{code.description}</p>
          <p className="code-description">Beauty: {code.beauty} </p>

          <div className="container mx-auto p-4">
            {/* <CodeBlock
              language={code.language}
              text={code.solution}
              theme={nord}
              wrapLines={true}
              codeBlock
            /> */}
            {/* <Editor
              value={code.solution}
              //   onValueChange={(code) => setCode({ ...code, solution: code })}
              highlight={(code) => highlight(code, languages.python)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            /> */}
            <pre>
              <code className={`language-java`}>{code.solution}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodePage;
