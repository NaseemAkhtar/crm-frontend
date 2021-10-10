import React from 'react';
import { Form, Jumbotron, Button } from 'react-bootstrap'

function TicketForm({ handleSubmit, handleOnchange}) {
    return (
        <Jumbotron>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        onChange={handleOnchange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="date"
                        name="issueDate"
                        onChange={handleOnchange}
                        required
                    />
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
        </Jumbotron>
    );
}

export default TicketForm;