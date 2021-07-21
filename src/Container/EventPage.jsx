import axios from 'axios'
import React from 'react'
import { useEffect, useState, loginBtn, signupbtn } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './styleEvent.css'
function EventPage() {
    const token= localStorage.getItem("token");
    const [event, setevent] = useState({
        title: "",
        venue: "",
        desc:"",
        date:"",
        image:""
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setevent({ ...event, [name]: value })
    }
    const submitBtn = (e) =>{
        e.preventDefault();
        const eventData = new FormData()
        eventData.append('title', event.title)
        eventData.append('venu', event.venue)
        eventData.append('description', event.desc)
        eventData.append('date', event.date)
        eventData.append('image', event.image)
        console.log(eventData);
        axios.post('http://localhost:90/event/insert',eventData,token)
        .then((response)=>{
            console.log(response)
            alert(response.data.message)
        })
        .catch((err)=>{
            console.log(err.response)
        })
        
        
    }
    return (
        <div className='event__bg'>
            <div className='event__container'>
                <form>
                    <div classname='event__form'>
                        <h1 style={{textAlign:'center', color:'grey'}}>Event Details Form</h1>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <b><label className='login__label'>Title</label></b>
                                    </div>
                                    <div>
                                        <input type="text" value={event.title} onChange={handleInput} name="title" autoComplete="off" data-test="email"></input>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <b><label className='login__label'>Venue</label></b>
                                    </div>
                                    <div>
                                        <input type="text" value={event.venue} onChange={handleInput} name="venue" autoComplete="off" data-test="email"></input>
                                    </div>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <b><label className='login__label'>Description</label></b>
                                    </div>
                                    <div>
                                        <textarea rows="8" cols="50" style={{ border: '2px solid #2b96d5', width: '100%', borderRadius: '5px' }} value={event.desc} onChange={handleInput} name="desc" autoComplete="off" data-test="email"></textarea>
                                    </div>
                                </Col>
                                <Col>

                                    <Row>
                                        <Col>
                                            <div>
                                                <b><label className='login__label'>Date</label></b>
                                            </div>
                                            <div>
                                                <input type="datetime-local" style={{ border: '2px solid #2b96d5', width: '100%', borderRadius: '5px' }} value={event.date} onChange={handleInput} name="date" autoComplete="off" data-test="email"></input>
                                            </div></Col>
                                    </Row>
                                    <Row style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <Col>
                                            Click here to Upload An Image<br></br>
                                            <input type='file' value={event.image} onChange={handleInput} name='image'></input>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <Col xs={24} md={6} align='middle' >
                                            <button onClick={submitBtn} style={{ width: '150px', borderRadius: '5px' }} data-test="login-btn">Submit</button>

                                        </Col>
                                        <Col xs={24} md={6} align='middle' >
                                            <Link to='/register'>
                                                <button style={{ width: '150px', borderRadius: '5px' }} data-test="btn-signup">Cancel</button>
                                            </Link>

                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Container>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EventPage
