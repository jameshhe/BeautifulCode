import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createCode } from "../graphql/mutations";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const CodeUpload = () => {
  const initialForm = {
    number: "",
    problem: "",
    solution: "",
    beauty: "",
    description: "",
    language: "",
  };

  const [data, setData] = useState(initialForm);

  const handleSubmit = async () => {
    let codeDetails = {
      number: data.number,
      problem: data.problem,
      abbreviation: data.problem,
      solution: data.solution,
      beauty: data.beauty,
      description: data.description,
      language: data.language,
    };

    await API.graphql(graphqlOperation(createCode, { input: codeDetails }));
    setData(initialForm);
  };

  return (
    <div>
      <h1 className="display-4">Create a new problem</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Number
            <input
              name="number"
              type="number"
              value={data.number}
              onChange={(e) => setData({ ...data, number: e.target.value })}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Problem
            <input
              name="problem"
              type="text"
              value={data.problem}
              onChange={(e) => setData({ ...data, problem: e.target.value })}
              className="form-control"
              required
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Solution
            {/* <input
              name="solution"
              type="text"
              value={data.solution}
              onChange={(e) => setData({ ...data, solution: e.target.value })}
              className="form-control"
              required
            /> */}
            <Editor
              value={data.solution}
              onValueChange={(code) => setData({ ...data, solution: code })}
              highlight={(code) => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Language
            <input
              name="language"
              type="text"
              value={data.language}
              onChange={(e) => setData({ ...data, language: e.target.value })}
              className="form-control"
              required
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Description
            <textarea
              name="description"
              type="text"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="form-control"
              rows="3"
              required
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Beauty
            <textarea
              name="beauty"
              type="text"
              value={data.beauty}
              onChange={(e) => setData({ ...data, beauty: e.target.value })}
              className="form-control"
              rows="3"
              required
            />
          </label>
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CodeUpload;
