import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {testOneData} from '../constants/defaultValues';
import Code from 'react-code-prettify';

function TestOne() {
    const [data, setData] = useState('');
    const [result, setResult] = useState('');
    useEffect(() => {
        const res = transformValue(testOneData);
        setResult(JSON.stringify(res, undefined, 4));
        setData(JSON.stringify(testOneData, undefined, 4));
    }, []);

    const transformNumber = (num) => {
        return num + 1;
    };

    const transformString = (str) => {
        return `${str} AE`;
    };

    const transformObject = (obj) => {
        const transformedObject = {};
        Object.entries(obj).forEach(([key, val]) => {
            transformedObject[key] = transformValue(val);
        });
        return transformedObject;
    };
    const transformValue = (val) => {
        if (Array.isArray(val)) {
            return val.map(transformValue);
        }
        if (typeof val === 'object' && val !== null) {
            return transformObject(val);
        }
        if (typeof val === 'string') {
            return transformString(val);
        }
        if (typeof val === 'number') {
            return transformNumber(val);
        }
        return val;
    };
    return (
        <Row className="align-items-center justify-content-center text-start pt-3">
            <Col md={3}>
                <h6>Data:</h6>
                <Code
                    codeString={data}
                    language="javascript"
                />
            </Col>
            <Col md={1}>
                <p className="mb-0 text-center">>>>>></p>
            </Col>
            <Col md={3}>
                <h6>Result:</h6>
                <Code
                    codeString={result}
                    language="javascript"
                />
            </Col>
        </Row>
    );
}

export default TestOne;
