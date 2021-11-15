import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap'
import './pwReset.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function PwReset() {
    const [password, setPassword] = useState({
        password: "",
        conpassword: "",
        userId:localStorage.getItem("userId")
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPassword({ ...password, [name]: value })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/resetPassword",password)
        .then((response)=>{     
            toast.success('Password Reset Complete!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });      
            console.log(response)            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="pwreset__body">
            <Form style={{ marginTop:"200px",marginBottom:"200px", marginLeft: "auto", marginRight: "auto", width: '50%'}}>
                <Row>
                    <b><label className='password__label'>Password:</label></b>

                </Row>
                <Row>
                    <input type="password" style={{ border: '2px solid #2b96d5', width: '40%', borderRadius: '5px' }} className='password__input' value={password.password} onChange={handleInput} name="password" autoComplete="off" data-test="password" />
                </Row>
                <Row>
                    <b><label className='password__label'>Confirm Password:</label></b>

                </Row>
                <Row>
                    <input type="password" style={{ border: '2px solid #2b96d5', width: '40%', borderRadius: '5px' }} className='password__input' value={password.conpassword} onChange={handleInput} name="conpassword" autoComplete="off" data-test="con-password" />
                </Row>
                <Row>
                    <button style={{ width:'80px', borderRadius:'5px',color:'white', backgroundColor:'rgb(43, 150, 213)'}} onClick={handleSubmit}>Submit</button>
                </Row>
            </Form>
            <ToastContainer/>
        </div>
    )
}

export default PwReset
