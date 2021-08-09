import React, { useState, useEffect, useMemo } from "react";
import { API } from "aws-amplify";
import { listCodes } from "../graphql/queries";
import { Link } from "react-router-dom";
import Table from "./Table";
import Loading from "./Loading";

const CodeLink = ({ id }) => {
  return <Link to={`/code/${id}`}>View</Link>;
};

const CodeList = () => {
  const [codes, setCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = useMemo(() => [
    { Header: "ID", accessor: "number" },
    { Header: "Problem", accessor: "problem" },
    {
      Header: "",
      accessor: "id",
      Cell: ({ cell: { value } }) => <CodeLink id={value} />,
    },
  ]);

  useEffect(() => {
    fetchCodes();
  }, []);

  const fetchCodes = async () => {
    const apiData = await API.graphql({ query: listCodes });

    setCodes(apiData.data.listCodes.items);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>Code List</h1>
          <div>
            <Table columns={columns} data={codes} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeList;
