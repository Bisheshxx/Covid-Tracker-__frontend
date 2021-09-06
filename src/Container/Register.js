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
    // const [errors, setErrors] = useState({})
    const [pwError, setPwError] = useState("")
    const [fnError, setFnError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [usertypeError, setUsertypeError] = useState("")
    const [conPwError, setConPwError] = useState("")
    
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setsignup({ ...signup, [name]: value })

    }
    
    const signupbtn = (e) => {
        e.preventDefault()
        if (!signup.fullname) { 
            setFnError( "This Field is required" )
        }
        else if(signup.fullname.includes("1") ||  signup.fullname.includes("2") ||  signup.fullname.includes("3") || signup.fullname.includes("4") || 
        signup.fullname.includes("5") ||  signup.fullname.includes("6") ||  signup.fullname.includes("7") ||  signup.fullname.includes("8") || signup.fullname.includes("9") || signup.fullname.includes("0")  ){
            setFnError("Name cannot contain numbers!!")
        }
        else{
            setFnError("")
        }
        if (!signup.email.trim("@")) {
            setEmailError( "This Field is required" )
        }
        else if(!signup.email.includes("@")){
            setEmailError("invalid Email")
        }
        else{
            setEmailError("")
        }
        if (!signup.password) {
            setPwError("This Field is required" )
        }
        else if (signup.password<6) {
            setPwError("Password must me longer than 6 characters" )
        }
        else{
            setPwError("")
        }
        if(!signup.usertype){
            setUsertypeError("Please Select User type!!")
        }
        else{
            setUsertypeError("")
        }
        if(!signup.conpassword){
            setConPwError("This Field Cannot be Empty")
        }
        if(signup.password !== signup.conpassword){
            setConPwError("Doesn't match with password!")
        }
        else{
            setConPwError("")
        }
       
        console.log(fnError ,pwError , emailError )
        console.log(!fnError && !pwError && !emailError)
        
        if(!fnError && !pwError && !emailError){
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
                    alert("invalid")
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
                                {fnError}
                            </p>
                        </div>


                        <div>
                            <b><label className='register__label'>Email</label></b>
                        </div>
                        <div>
                            <input className='register__input' type="text" value={signup.email} onChange={handleInput} name="email" autoComplete="off"></input>
                            <p style={{ fontSize: '10px', color: 'red' }}>
                                {emailError}
                            </p>
                        </div>


                        <div>
                            <b><label className='register__label'>Password</label></b>
                        </div>

                        <div>
                            <input className='register__pw' type="password" value={signup.password} onChange={handleInput} name="password" autoComplete="off"></input>
                            <p style={{ fontSize: '10px', color: 'red' }}>
                                {pwError}
                            </p>
                        </div>


                        <div>
                            <b><label className='register__label'>Confirm Password</label></b>
                        </div>
                        <div>
                            <input className='register__pw' type="password" value={signup.conpassword} onChange={handleInput} name="conpassword" autoComplete="off"></input>
                            <p style={{ fontSize: '10px', color: 'red' }}>
                                {conPwError}
                            </p>
                        </div>

                        <select className='custom-select' value={signup.usertype} onChange={handleInput} name="usertype">
                            <option> </option>
                            <option value="User">User</option>
                            <option value="Event Manager">Event Manager</option>
                        </select>
                        <p style={{ fontSize: '10px', color: 'red' }}>
                                {usertypeError}
                            </p>
                        
                            <button className='login__btn' onClick={signupbtn} style={{ marginTop: '10px', color: 'white', backgroundColor: '#2b96d5', marginRight: '20%', marginLeft: '20%' }}>Sign-UP</button>
                        

                    </div>




                </form>

            </div>
        </div>
    )
}

export default Register
