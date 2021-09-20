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
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
            className="text-light mb-3"
            to="/test/1"
        >
            Test 1
        </Link>
        <Link
            className="text-light mb-3"
            to="/test/2"
        >
            Test 2
        </Link>
        <Link
            className="text-light"
            to="/test/3"
        >
            Test 3
        </Link>
    </>
);

export default Index;
