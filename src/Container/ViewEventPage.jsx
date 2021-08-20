import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import './ViewEventPage.css'

function ViewEventPage() {
    const token = localStorage.getItem("token");
    const [event, setEvent] = useState([])
    const [going, setGoing] = useState([])
    useEffect(() => {
        axios.get('http://localhost:90/event/showall', {
            headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                setEvent(
                    response.data.data
                )
                console.log(setEvent)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])
    // const goingButton =()=>{
    //     axios.put('http://localhost:90/event/going', {
    //         headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
    //     })
    //     then.Body((res)=>{
    //         setGoing(
    //             res.data.data+1
    //         )
    //     })
    // }
    return (
        <div className="ViewEventPage">
            <div className="ViewEventPage__banner">
                <h1><b>Events</b></h1>
                <p>Following are the ongoing events related to COVID-19 happening in Nepal</p>
            </div>
            <div className="ViewEventPage__body">
            <Row xs={1} md={3} className="g-4">
                {event.map((item) => (
                    <div className='ViewEventPage__Card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                {/* {item.image} */}
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Venue: {item.venue}   </Card.Subtitle>
                                <Card.Subtitle>
                                    Description:
                                </Card.Subtitle>
                                <br />
                                <Card.Text>
                                    {item.description} 
                                </Card.Text>

                                <Card.Text>
                                    Venue:{item.venue}
                                </Card.Text><Card.Text>
                                    Date:{item.date}
                                </Card.Text>
                                <Button variant="primary" style={{ width: "100px", height: '20px', fontSize: '8px', textAlign: 'center', borderRadius: '9px' }}>Going</Button>
                                <Button variant="primary" style={{ width: "100px", height: '20px', fontSize: '8px', borderRadius: '9px' }}>Interested</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                </Row>
            </div>

        </div>
    )
}
export default ViewEventPage
