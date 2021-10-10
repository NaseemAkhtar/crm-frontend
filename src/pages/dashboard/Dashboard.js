import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from '../../assets/data/dataTicket.json'
import BreadcrumbsBlk from '../../components/breadcrumb/BreadcrumbsBlk'

function Dashboard() {
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbsBlk page="dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button variant="info">Add ticket</Button>
                </Col>
            </Row>

            <Row>
                <Col className="text-center mt-5 mb-2">
                    <div>Total tickets: 50</div>
                    <div>Pending tickets: 5</div>
                </Col>
            </Row>

            <Row>
                <Col className="mt-5">
                    <div>Recentally added tickets</div>
                </Col>
            </Row>

            <Row>
                <Col className="ticket-table">
                    <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;