import React from 'react'
import { useEffect, useState, loginBtn, signupbtn } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import './stylelogin.css'
import { Link } from 'react-router-dom'

function Login() {
    const token= localStorage.getItem("token");
    const [login, setlogin] = useState({
        email: "",
        password: "",
        loginCheck:false
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setlogin({ ...login, [name]: value })
    }
    const loginBtn = (e) => {
        e.preventDefault();
        const userdata = {
            email: login.email,
            password: login.password
        }
        axios.post('http://localhost:90/account/login', userdata)
            .then((response) => {                
                var token = localStorage.setItem('token', response.data.token)
                if(token !== null){
                    window.location.href = "/"
                    alert("Logged In!")
                }
                else{
                    console.log(response)
                    alert('Incorrect Password or Username')
                }
                
            })
            .catch((err) => {
                alert("Invalid Credential!")
                console.log(err.response)
            })
    }

    return (
        <div className='register__bg' data-test="login">
            <div className='register__container'>
                <form>
                    <div className='login__form'>
                        <div>
                            <b><label className='login__label'>Email</label></b>
                        </div>
                        <div>
                            <input type="text" value={login.email} onChange={handleInput} name="email" autoComplete="off" data-test="email"></input>
                        </div>


                        <div>
                            <b><label className='login__label'>Password</label></b>
                        </div>
                        <div>
                            <input type="text" value={login.password} onChange={handleInput} name="password" autoComplete="off" data-test="password"></input>
                        </div>
                    </div>


                    <Container>
                        <Row style={{ paddingTop: '20px', display:'flex', justifyContent:'center'}}>
                            <Col xs={24} md={6} align='middle' style={{ paddingLeft:'100px'}} >
                                <button onClick={loginBtn} style={{ width:'80px', borderRadius:'5px' }} data-test="login-btn">Login</button>

                            </Col>
                            <Col xs={24} md={6} align='middle'  style={{paddingRight:'100px'}}>
                                <Link to='/register'>
                                <button style={{ width:'80px', borderRadius:'5px'}} data-test="btn-signup">Sign-UP</button>
                                </Link>
                                
                            </Col>
                        </Row>
                        </Container>

                </form>

            </div>
        </div>
    )
}

export default Login