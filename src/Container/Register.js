import React, { useEffect, useState, signupbtn } from 'react'
import './styleregister.css'
import { Component, state, submitUser, changeHandler } from 'react'
import axios from 'axios'

function Register() {
    const [signup, setsignup] = useState({
        fullname: "",
        email: "",
        password: "",
        conpassword: "",
        usertype:""
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setsignup({ ...signup, [name]: value })

    }
    const signupbtn = (e) => {
        e.preventDefault();
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
                console.log(err.response)
            })
    }

    return (
        <div className='register__bg'>
            <div className='register__container'>

                <form>
                    <div className='register__form'>
                        <b><label className='register__label'>Name</label></b>
                        <div>
                            <input type="text" value={signup.fullname} onChange={handleInput} name="fullname" autoComplete="off"></input>
                        </div>


                        <div>
                            <b><label className='register__label'>Email</label></b>
                        </div>
                        <div>
                            <input type="text" value={signup.email} onChange={handleInput} name="email" autoComplete="off"></input>
                        </div>


                        <div>
                            <b><label className='register__label'>Password</label></b>
                        </div>

                        <div>
                            <input type="password" value={signup.password} onChange={handleInput} name="password" autoComplete="off"></input>
                        </div>


                        <div>
                            <b><label className='register__label'>Confirm Password</label></b>
                        </div>
                        <div>
                            <input type="password" value={signup.conpassword} onChange={handleInput} name="conpassword" autoComplete="off"></input>
                        </div>
                        
                            <select className='custom-select' value={signup.usertype}>
                                <option value="User">User</option>
                                <option value="Event Manager">Event Manager</option>
                            </select>
                        

                    </div>

                    <button onClick={signupbtn} style={{marginTop:'30px', marginLeft: "40%", borderRadius: '5px' }}>Sign-UP</button>




                </form>

            </div>
        </div>
    )
}

export default Register
