import React, {useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';

const TestTwo = () => {
    const [isSecondary, setIsSecondary] = useState(true);
    return (
        <Row>
            <Col md={{span: 6, offset: 3}}>
                <div className={['sample-box mt-5 rounded shadow', isSecondary ? 'secondary-background' : ''].join(' ')}>
                    <Button
                        variant={isSecondary ? 'outline-light' : 'light'}
                        size="lg"
                        onClick={() => setIsSecondary(!isSecondary)}
                    >My Toggle Btn</Button>
                </div>
            </Col>
        </Row>
    );
};

export default TestTwo;
