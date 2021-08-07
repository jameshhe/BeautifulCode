import React, {useState, useEffect, useMemo} from 'react';
import {API} from 'aws-amplify'
import {listCodes} from '../graphql/queries';
import {Link} from "react-router-dom";
import Table from "./Table";


const CodeLink = ({id}) => {
    return (
        <Link to={`/code/${id}`}>View</Link>
    )
}

const CodeList = () => {
    const [codes, setCodes] = useState([]);
    const columns = useMemo(() => [
        {Header: 'ID', accessor: 'number'},
        {Header: 'Problem', accessor: 'problem'},
        {Header: '', accessor: 'id', Cell: ({cell: {value}}) => (<CodeLink id={value}/>)}
    ])


    useEffect(() => {
        fetchCodes()
    }, [])

    const fetchCodes = async () => {
        const apiData = await API.graphql({query: listCodes})
        console.log(apiData)
        setCodes(apiData.data.listCodes.items)
    }

    return (
        <div>
           <h1>Code List</h1>
           <div>
               <Table columns={columns} data={codes}/>
            
            </div> 
        </div>
    );
};

export default CodeList;