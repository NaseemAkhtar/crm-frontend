import React from 'react';
import { Table } from 'react-bootstrap'

function TicketTable({tickets}) {

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Open date</th>  
                </tr>
            </thead>

            <tbody>
                {tickets.length ?
                    tickets.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>SSL issue</td>
                        <td>{row.status}</td>
                        <td>{row.date}</td>
                    </tr>
                )) :
                    <tr>
                        <td colSpan="4" className="text-center">Ticket Not found</td>
                    </tr>
                }
            </tbody>
        </Table>
    );
}

export default TicketTable;