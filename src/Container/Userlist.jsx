import { Form, Table, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import React, { useState } from 'react'
import { Component, state } from 'react'
import { useEffect } from 'react'

function Userlist() {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState([])
    const [data, setData] = useState({
        _id: "",
        fullname: "",
        email: "",
        userType: ""
    });
    const [show, setShow] = useState(false);
    const { _id, fullname, email, userType } = data;
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true)
        setData(item);
    };
    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        axios.get('http://localhost:90/user/showall')
            .then((response) => {
                console.log(response)
                setUser(
                    response.data.data
                )
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])
    const handleEventUpdate = () => {
        axios.put(`http://localhost:90/user/update/`, data)
            .then((res) => {
                alert(res.data && res.data.message);
            })
            .catch((err) => {
                alert("Update failed!");
                console.log(err);
            })
    }
    const deleteEvent = (user_id) => {
        axios.delete(`http://localhost:90/user/delete/${user_id}`)
            .then((response) => {
                alert(response.data && response.data.message);
                console.log(response.data && response.data.message);
                window.location.reload();
                // alert(response.data);

            })
            .catch((err) => {
                alert("Delete failed!");
                console.log(err);
                console.log(user_id)
            }
            )
    }
    return (
        <div className='productview'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Usertype</th>
                        <th> </th>
                    </tr>
                </thead>

                {user.map((item, index) => {
                    return (

                        <tbody>
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.userType}</td>
                                <td>
                                    <button style={{ width: "100px" }} size="sm" data-toggle="modal" onClick={() => handleShow(item)} >Update</button>
                                    <button style={{ borderRadius:'8px', width: "100px" }} size="sm" data-toggle="modal" onClick={() => { deleteEvent(item._id) }}onClick={() => { deleteEvent(item._id) }} >Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEventUpdate}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="fullname" value={fullname} onChange={handleInputChange} />
                            <Form.Label>Description</Form.Label>
                            <Form.Control disabled type="text" name="email" value={email} onChange={handleInputChange} />
                            <Form.Label>Venue</Form.Label>
                            <Form.Control type="text" name="userType" value={userType} onChange={handleInputChange} />
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




export default Userlist