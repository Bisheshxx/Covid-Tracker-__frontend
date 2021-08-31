import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap'
import './pwReset.css'

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
            alert(response)         
            console.log(response)            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="pwreset__body">
            <Form style={{ marginLeft: "auto", marginRight: "auto", width: '50%'}}>
                <Row>
                    <b><label className='password__label'>Password:</label></b>

                </Row>
                <Row>
                    <input className='password__input' type="text" value={password.password} onChange={handleInput} name="password" autoComplete="off" data-test="password" />
                </Row>
                <Row>
                    <b><label className='password__label'>Confirm Password:</label></b>

                </Row>
                <Row>
                    <input className='password__input' type="text" value={password.conpassword} onChange={handleInput} name="conpassword" autoComplete="off" data-test="con-password" />
                </Row>
                <Row>
                    <button onClick={handleSubmit}>Submit</button>
                </Row>
            </Form>
        </div>
    )
}

export default PwReset
