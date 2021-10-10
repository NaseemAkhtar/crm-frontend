import React from 'react';
import {Container, Row, Col, Breadcrumb} from 'react-bootstrap'
import BreadcrumbsBlk from '../../components/breadcrumb/BreadcrumbsBlk';
import TicketForm from '../../components/ticket-form/TicketForm'

function Ticket(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbsBlk page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <TicketForm/>
                </Col>
            </Row>
        </Container>
    );
}

export default Ticket;