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
                <Row xs={1} md={3} className="g-4" style={{ marginTop: "1in", marginBottom: "1in" }}>
                    {event.map((item) => (
                        <div className='ViewEventPage__Card' style={{ width: '4in' }} >
                            <Card className="View_cont" style={{ width: '8in', height: "3in", margin: '8px' }}>
                                <Card.Body style={{ width: "3.3in" }}>
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
                                    <button style={{ background: "transparent", border: "solid #248acc 1.5px", color: "#248acc" }}>Interested</button><button>Going</button>   {!token ? (<>
                                    </>) : (<> <button className='donate'>Donate</button>
                                    </>)}

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
