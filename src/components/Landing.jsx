import React from 'react';
import {Link} from "react-router-dom"


const Landing = () => {
    return (
        <div>
            <h1>Hello, Code.</h1>
            <p>Beautiful ways to solve problems</p>
            <Link to="/codeList">View examples</Link>
        </div>
    );
};

export default Landing;