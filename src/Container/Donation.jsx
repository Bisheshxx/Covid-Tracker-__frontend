import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Form, Row, Table } from 'react-bootstrap'

function Donation() {
    const[donation,setDonation]=useState([])
    useEffect(() => {
        axios.get('http://localhost:90/donate/amount', {
            headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                setDonation(
                    response.data.data
                )
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])
    return (
        <div className="donation_form">
            <div className='donation__view'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Donation Ammount</th>
                        <th>Remark</th>
                        <th>Event Id</th>
                    </tr>
                </thead>
                {donation.map((item, index) => (
                    <tbody>
                        <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.email}</td>
                            <td>{item.donation_amount}</td>
                            <td>{item.Remarks}</td>
                            <td>{item.event_id}</td>
                        </tr>
                    </tbody>

                ))
                }
                </Table>
                </div>
        </div>
        
    )
}

export default Donation
