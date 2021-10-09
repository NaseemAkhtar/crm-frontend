import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

const ResetPassword = ({ handleOnchange, handleResetSubmit, formSwich, email}) => {
    return (
        <Container>
            <h1>Reset Password</h1>
            <Form autoComplete="off" onSubmit={handleResetSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleOnchange}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <hr/>
            <Row>
                <Col><a href="#!" onClick={() => formSwich('login')}>Login now</a></Col>
            </Row>
        </Container>
    );
}

ResetPassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleResetSubmit: PropTypes.func.isRequired,
    formSwich: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}


export default ResetPassword
