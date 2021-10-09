import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

const LoginForm = ({ handleOnchange, handleSubmit, formSwich, email, password}) => {
    return (
        <Container>
            <h1>Login</h1>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleOnchange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handleOnchange}
                        required
                    />
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
            <hr/>
            <Row>
                <Col><a href="#!" onClick={() => formSwich('reset')}>Forgot password</a></Col>
            </Row>
        </Container>
    );
}

LoginForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formSwich: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}


export default LoginForm
