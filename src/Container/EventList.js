import { Form, Table, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteEvent } from 'react'


function EventList() {
    const token = localStorage.getItem("token");
    const [event, setEvent] = useState([])

    const [show, setShow] = useState(false);

    const [data, setData] = useState({
        _id: "",
        title: "",
        description: "",
        venue: "",
        date: "",
    });

    const { _id, title, description, venue, date } = data;

    const handleClose = () => setShow(false);

    const handleShow = (item) => {
        setShow(true)
        setData(item);
    };

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        axios.get('http://localhost:90/event/showall', {
            headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                setEvent(
                    response.data.data
                )
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])

    const handleEventUpdate = () => {
        axios.put(`http://localhost:90/event/update/`, data)
            .then((res) => {
                alert(res.data && res.data.message);
            })
            .catch((err) => {
                alert("Update failed!");
                console.log(err);
            })
    }

    const deleteEvent = (event_id) => {
        axios.delete(`http://localhost:90/event/delete/${event_id}`)
            .then((response) => {
                alert(response.data && response.data.message);
                console.log(response.data && response.data.message);
                window.location.reload();
                // alert(response.data);

            })
            .catch((err) => {
                alert("Delete failed!");
                console.log(err);
                console.log(event_id)
            }
            )
    }

    console.log("data", data);

    return (
        <div className='productview'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>description</th>
                        <th>venue</th>
                        <th>date</th>
                        <th>Usertype</th>
                        <th> </th>
                    </tr>
                </thead>
                {event.map((item, index) => (
                    <tbody>
                        <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.venue}</td>
                            <td>{item.date}</td>
                            <td>{item.date}</td>
                            <td><button style={{ width: "100px" }} size="sm" data-toggle="modal" onClick={() => handleShow(item)} >Update</button>
                                <button style={{ width: "100px" }} size="sm" onClick={() => { deleteEvent(item._id) }}>Delete</button></td>
                            <td></td>
                        </tr>
                    </tbody>

                ))
                }
            </Table>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEventUpdate}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" value={title} onChange={handleInputChange} />
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" value={description} onChange={handleInputChange} />
                            <Form.Label>Venue</Form.Label>
                            <Form.Control type="text" name="venue" value={venue} onChange={handleInputChange} />
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" name="date" value={date} onChange={handleInputChange} />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )

}


export default EventList