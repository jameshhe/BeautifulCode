import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createCode } from "../graphql/mutations";

const CodeUpload = () => {
  const initialForm = {
    problem: "",
    solution: "",
    beauty: "",
    description: "",
  };

  const [data, setData] = useState(initialForm);

  const handleSubmit = async () => {
    let codeDetails = {
      number: 1,
      problem: data.problem,
      abbreviation: data.problem,
      solution: data.solution,
      beauty: data.beauty,
      description: data.description,
    };
    console.log(codeDetails);
    await API.graphql(graphqlOperation(createCode, { input: codeDetails }));
    setData(initialForm);
  };

  return (
    <div>
      <h1>Create a new problem</h1>

      <form onSubmit={handleSubmit}>
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
            <input
              name="solution"
              type="text"
              value={data.solution}
              onChange={(e) => setData({ ...data, solution: e.target.value })}
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
