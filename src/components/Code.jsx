import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getCode } from "../graphql/queries";
import { CodeBlock, nord } from "react-code-blocks";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import Loading from "./Loading";

const Code = () => {
  let { id } = useParams();

  const [code, setCode] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchCode();
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
            <CodeBlock
              language={code.language}
              text={code.solution}
              theme={nord}
              wrapLines={true}
              codeBlock
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Code;
