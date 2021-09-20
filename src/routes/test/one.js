import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TestOne from '../../components/TestOne';
import logo from '../../logo.svg';
import {testOneData} from '../../constants/defaultValues';

const One = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(testOneData);
    }, [testOneData]);
    // >>>>>>> Start Test Area >>>>>>>
    useEffect(() => {
        console.log({data});
    }, []);


    // >>>>>>>> End Test Area >>>>>>>>
    return (
        <Container>
            <img
                src={logo}
                className="App-logo"
                alt="logo"
            />
            <p>
                Edit <code>src/test/one.js</code> create a function get <b>Data</b> and create <b>Result</b>.
            </p>
            <TestOne />
            <p className="mb-0 mt-3">
                <Link
                    to="/"
                    className="App-link"
                >Back to Home</Link>
            </p>
        </Container>
    );
};

export default One;
