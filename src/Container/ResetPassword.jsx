import React, { useState } from 'react'
import './resetpassword.css'
import { Form,Button,Modal } from 'react-bootstrap'
import axios from 'axios';
function ResetPassword() {
    const [show, setShow] = useState(false);
    let [email,setEmail] = useState({
        "email":""
    })
    let [pinCode,setPinCode] = useState("")
    const handleClose = () => setShow(false);

    const changeHandler = (e)=>{
        setEmail({
            ...email,
            [e.target.name]:e.target.value
        })
    }

    const getCode = (e)=>{        
        e.preventDefault();
        axios.post("http://localhost:90/forgotPassword/askEmail",email)
        .then((response)=>{
           
            if(response.data.success == true)
            {
                localStorage.setItem('pinCode',response.data.code);
                localStorage.setItem('userId',response.data.user_id);
                document.querySelector('#showModal').click();
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleShow = () => {
        setShow(true)
    };

    const verifyPinCode = (e)=>{
        var pinCode = parseInt(localStorage.getItem('pinCode'));
        var myPinCode = parseInt(pinCode);
        if(pinCode == myPinCode)
        {
            window.location.href = "/resetpassword/changepass"
        }
        
    }
    
    return (
        <div className='reset__background'>
            <div className="reset__password">
                <a class="navbar-brand" href="index.html"><img
                    src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/216791868_5766928153379044_7873052256259565595_n.png?_nc_cat=110&ccb=1-4&_nc_sid=730e14&_nc_ohc=4Tg60pfiLBwAX8Z3tD8&_nc_ht=scontent.fktm8-1.fna&oh=077b2c5292ded1daf862f4584fa13085&oe=6119F53A" alt="logo" /></a>
                <Form onSubmit={getCode}>
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Enter your user account's verified email address and we will send you a password reset link.
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        width='200px'
                        placeholder='Enter Your Email'
                        name="email"
                        onChange={(e=>{changeHandler(e)})}
                        value={email.email}
                        required
                    />
                    <button className="btn btn-primary btn-md w-50" type="submit" name="submit">
                                Submit
                    </button>
                    <Button variant="primary" type="button" className="d-none" id="showModal"  onClick={() => handleShow()}>
                                Open
                    </Button>
                </Form>
            </div>
            <Modal centered show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Verify PinCode</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter your New Password</Form.Label>
                            <Form.Control type="text" name="title" />
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="text" name="title" />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">
                                Confirm
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer> */}

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Pin Code</Form.Label>
                            <Form.Control type="text" name="pinCode" onChange={(e)=>{setPinCode(e.target.value)}} />
                            
                        </Form.Group>

                        <Button variant="primary" onClick={(e)=>{verifyPinCode(e)}}>
                                Verify PinCode
                            </Button>

                        
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ResetPassword

