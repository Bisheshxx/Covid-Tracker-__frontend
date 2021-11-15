import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Card, CardColumns, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ViewEventPage.css'

function ViewEventPage() {
    const token = localStorage.getItem("token");
    const [event, setEvent] = useState([])
    const [going, setGoing] = useState()
    const [show, setShow] = useState(false);
    const [donation, setDonation] = useState({})
    const [data, setData] = useState({
        _id: "",
        title: "",
        description: "",
        venue: "",
        date: "",
        email: "",
        donation_amount: "",
        Remarks: "",
        going: "",
        interested: ""
    })
    const { _id, Remarks, email, donation_amount } = data;
    console.log(_id)
    useEffect(() => {
        axios.get('http://localhost:90/event/showall', {
            headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                // console.log(response)
                setEvent(
                    response.data.data
                )
                console.log(setEvent)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true)
        setData(item)
    };
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }
    const handleEventDonate = (e) => {
        e.preventDefault();
        axios.post('http://localhost:90/donate/amount', data)
            .then((response) => {
                console.log(response)
                console.log(data)
                alert("Thank you for your Donation")
            })
            .catch((err) => {
                console.log(err)
                console.log("err")
            })
    }
    const handleResponse = (e, _id) => {
        window.location.reload();
        axios.post('http://localhost:90/event_toggle', { "decision": e.target.value, "event_id": _id },
            {
                headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
            })
            .then((response) => {
                console.log((response))
            })
            .catch((err) => {
                console.log(err)
                console.log("err")
            })
    }

    return (
        <div className="ViewEventPage">
            <div className="ViewEventPage__banner">
                <h1><b>Events</b></h1>
                <p>Following are the ongoing events related to COVID-19 happening in Nepal</p>
                {localStorage.getItem('usertype') == "Event_manager" ? (<><Link style={{marginLeft: "200px", color:"white"}} to="/createevent">Want to create an event? Click here</Link>
                </>) : (<> 
                </>)}
            </div>
            <Container>
            <div className="ViewEventPage__body">
                <Row xs={1} md={3} className="g-4" style={{ marginTop: "1in", marginBottom: "1in" }}>
                    {event.map((item) => (
                        <div className='ViewEventPage__Card col-lg-4' style={{ width: '4in' }} >
                            <Card className="View_cont" style={{marginTop:"10px"}}>
                                <Card.Body style={{ width: "3.3in" }}>
                                    <Card.Img style={{ width: '200px', objectFit: "contain", marginLeft:"10%", marginRight:"110%" }} variant="top" src={'http://localhost:90/' + item.eimage} />
                                    <Card.Title>{item.title}</Card.Title>

                                    <Card.Subtitle className="mb-2 text-muted">venue: {item.venue}   </Card.Subtitle>
                                    <Card.Subtitle>
                                        Description:
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>

                                    <Card.Text>
                                        Date:{item.date}
                                    </Card.Text>
                                    <Card.Subtitle style={{ fontSize: "9px" }} className="mb-2 text-muted">{item.going && item.going.length} people are going   </Card.Subtitle>
                                    <Card.Subtitle style={{ fontSize: "9px" }} className="mb-2 text-muted">{item.interested && item.interested.length} people are interested   </Card.Subtitle>
                                    <div className="ViewEvent__button">
                                        <Card.Text>

                                            <CardColumns className="ViewEventPage__Buttons">
                                                
                    
                                                {!token ? (<>
                                                </>) : (<><button value="going" type="button" >  Going</button> <button value="interested" type="button" onClick={(e) => { handleResponse(e, item._id) }} style={{ background: "transparent", border: "solid #248acc 1.5px", color: "#248acc" }}> Interested</button> <button className='donate' onClick={() => handleShow(item)}>Donate</button>
                                                </>)}
                                            </CardColumns>



                                        </Card.Text>

                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
            </Container>
            <Modal centered show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Donation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEventDonate}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Event Id</Form.Label>
                            <Form.Control readOnly type="text" name="_id" value={_id} onChange={handleInput} />

                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" value={email} onChange={handleInput} />

                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" name="donation_amount" value={donation_amount} onChange={handleInput} />

                            <Form.Label>Remark</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" name="Remarks" value={Remarks} onChange={handleInput} />


                        </Form.Group>

                        <Button type="submit" variant="primary" >
                            Submit
                        </Button>


                    </Form>
                </Modal.Body>
            </Modal>

        </div>

    )
}

export default ViewEventPage
