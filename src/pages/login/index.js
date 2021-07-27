/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Login() {
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('loginData: ', location.state.dataLogin);
    }, [location]);

    const result = location.state.dataLogin;

    function handleSubmit(event) {
        event.preventDefault();
        if (email === result.email && password === result.password) {
            history.push({
                pathname: '/home',
                state: { dataResult: { email } },
            })
        } else {
            alert('Username or Password is incorrect');
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Login</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}