import React from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

const Index = () => (
    <>
        <img
            src={logo}
            className="App-logo"
            alt="logo"
        />
        <p>
            Choose your test.
        </p>
        <Link
            className="App-link mb-3"
            to="/test/1"
        >
            Test 1
        </Link>
        <Link
            className="App-link mb-3"
            to="/test/2"
        >
            Test 2
        </Link>
        <Link
            className="App-link"
            to="/test/3"
        >
            Test 3
        </Link>
    </>
);

export default Index;
