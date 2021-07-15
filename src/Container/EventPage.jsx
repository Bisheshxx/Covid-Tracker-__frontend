import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function EventPage() {
    return (
        <div className='event__container'>
            <form>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <b><label className='login__label'>Title</label></b>
                            </div>
                            <div>
                                <input type="text" name="email" autoComplete="off" data-test="email"></input>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <b><label className='login__label'>Venue</label></b>
                            </div>
                            <div>
                                <input type="text" name="email" autoComplete="off" data-test="email"></input>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <b><label className='login__label'>Description</label></b>
                            </div>
                            <div>
                                <textarea rows="8" cols="50" style={{ border: '2px solid #2b96d5', width: '100%', borderRadius: '5px' }} name="email" autoComplete="off" data-test="email"></textarea>
                            </div>
                        </Col>
                        <Col>

                            <Row>
                                <Col>
                                    <div>
                                        <b><label className='login__label'>Date</label></b>
                                    </div>
                                    <div>
                                        <input type="datetime-local" style={{ border: '2px solid #2b96d5', width: '100%', borderRadius: '5px' }} name="email" autoComplete="off" data-test="email"></input>
                                    </div></Col>
                            </Row>
                            <Row style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Col>
                                    Click here to Upload An Image<br></br>
                                    <input type='file'></input>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Col xs={24} md={6} align='middle' style={{ paddingLeft: '100px' }} >
                                    <button style={{ width: '150px', borderRadius: '5px' }} data-test="login-btn">Submit</button>

                                </Col>
                                <Col xs={24} md={6} align='middle' style={{ paddingRight: '100px' }}>
                                    <Link to='/register'>
                                        <button style={{ width: '150px', borderRadius: '5px' }} data-test="btn-signup">Cancel</button>
                                    </Link>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </form>
        </div>
    )
}

export default EventPage
