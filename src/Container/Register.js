import React, { useEffect, useState, signupbtn } from 'react'
import './styleregister.css'
import { Component, state, submitUser, changeHandler } from 'react'
import axios from 'axios'
import Login from './Login'
import { Link } from "react-router-dom"

function Register() {
    const [signup, setsignup] = useState({
        fullname: "",
        email: "",
        password: "",
        conpassword: "",
        usertype: ""
    })
    const [errors, setErrors] = useState({
        chkFullname: "",
        chkEmail: "",
        chkPassword: "",
        chkConpassword: "",
        chkUsertype: "",
        chkPassword: ""
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setsignup({ ...signup, [name]: value })

    }
    const signupbtn = (e) => {
        if (!signup.fullname) {
            setErrors({ ...errors, chkFullname: "This Field is required" })
        }
        else if (!signup.email.trim()) {
            setErrors({ ...errors, chkEmail: "This Field is required" })
        }
        else if (!signup.email.trim()) {
            setErrors({ ...errors, chkPassword: "This Field is required" })
        }
        else if (!signup.email.trim()) {
            setErrors({ ...errors, chkConpassword: "This Field is required" })
        }
        else if (signup.password !== signup.conpassword) {
            setErrors({ ...errors, chkConpassword: "Both need to be similar" })
        }
        else {
            const userdata = {
                fullname: signup.fullname,
                email: signup.email,
                password: signup.password,
                usertype: signup.usertype
            }
            console.log(userdata)
            axios.post('http://localhost:90/insert/user', userdata)
                .then((response) => {
                    console.log(response);
                    alert("User has been registered")
                })
                .catch((err) => {
                    alert("Invalid")
                    console.log(err.response)
                })
        }

    }

    return (
        <div className='register__bg'>
            <div className='register__container'>

                <form>
                    <div className='register__form'>
                        <b><label className='register__label'>Name</label></b>
                        <div>
                            <input type="text" className='register__input' value={signup.fullname} onChange={handleInput} name="fullname" autoComplete="off"></input>
                            <p style={{ fontSize: '10px', color: 'red' }}>
                                {errors && errors.chkFullname ? errors.chkEmail : null}
                            </p>
                        </div>


                        <div>
                            <b><label className='register__label'>Email</label></b>
                        </div>
                        <div>
                            <input className='register__input' type="text" value={signup.email} onChange={handleInput} name="email" autoComplete="off"></input>
                            <p style={{ fontSize: '10px', color: 'red' }}>
                                {errors && errors.chkEmail ? errors.chkEmail : null}
                            </p>
                        </div>


                        <div>
                            <b><label className='register__label'>Password</label></b>
                        </div>

                        <div>
                            <input className='register__pw' type="password" value={signup.password} onChange={handleInput} name="password" autoComplete="off"></input>
                            <p style={{ fontSize: '10px', color: 'red' }}>
                                {errors && errors.chkPassword ? errors.chkEmail : null}
                            </p>
                        </div>


                        <div>
                            <b><label className='register__label'>Confirm Password</label></b>
                        </div>
                        <div>
                            <input className='register__pw' type="password" value={signup.conpassword} onChange={handleInput} name="conpassword" autoComplete="off"></input>
                            <p style={{ fontSize: '10px', color: 'red' }}>
                                {errors && errors.chkConpassword ? errors.chkEmail : null}
                            </p>
                        </div>

                        <select className='custom-select' value={signup.usertype}>
                            <option value="Visitor">Visitor</option>
                            <option value="Event Manager">Event Manager</option>
                        </select>
                        <Link to="/login">
                            <button className='login__btn' onClick={signupbtn} style={{ marginTop: '10px', color: 'white', backgroundColor: '#2b96d5', marginRight: '20%', marginLeft: '20%' }}>Sign-UP</button>
                        </Link>

                    </div>




                </form>

            </div>
        </div>
    )
}

export default Register
