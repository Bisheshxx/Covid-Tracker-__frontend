import React from 'react'
import { useEffect, useState, loginBtn, signupbtn } from 'react'
import { Container, Row, Col,Form, Table, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import './stylelogin.css'
import { Link } from 'react-router-dom'
import { validate } from '@babel/types'

function Login() {
    const token= localStorage.getItem("token");
    
    const [login, setlogin] = useState({
        email: "",
        password: "",
    })
    const[errors,setErrors]=useState({
        chkEmail:"",
        chkPassword:""
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setlogin({ ...login, [name]: value })
    }
    const loginBtn = (e) => {
        e.preventDefault();

        if(!login.email.includes("@")){
            setErrors({...errors,chkEmail:"Invalid email!"});
        }else{
            axios.post('http://localhost:90/account/login', login)
            .then((response) => {                
                var token = localStorage.setItem('token', response.data.token)
                if(response.data.token!== null){

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
       
    }

    return (
        <div className='login__bg' data-test="login">
            <div className='login__container'>
                <form>
                    <div className='login__form'>
                        <div>
                            <b><label className='login__label'>Email</label></b>
                        </div>
                        <div>
                            <input className='login__input' type="text" value={login.email} onChange={handleInput} name="email" autoComplete="off" data-test="email"/>
                            <p style={{fontSize:'10px',color:'red'}}>
                            {errors && errors.chkEmail ? errors.chkEmail:null}
                            </p>
                        </div>


                        <div>
                            <b><label className='login__label'>Password</label></b>
                            
                          
                        </div>
                        <div>
                            <input className='login__input' type="password" value={login.password} onChange={handleInput} name="password" autoComplete="off" data-test="password"></input>
                            <Link to='/resetpassword' >Forgot Password?</Link>
                        </div>
                        
                    </div>
                    


                    <Container>
                        <Row style={{ paddingTop: '20px', display:'flex', justifyContent:'center'}}>
                            <Col xs={24} md={6} align='middle' style={{ marginTop:'5px',paddingRight:'auto',paddingLeft:'auto'}} >
                                <button onClick={loginBtn} style={{ width:'80px', borderRadius:'5px',color:'white' }} data-test="login-btn">Login</button>

                            </Col>
                            <Col xs={24} md={6} align='middle'  style={{marginTop:'5px',paddingRight:'auto',paddingLeft:'auto'}}>
                                <Link to='/register'>
                                <button style={{ width:'80px', borderRadius:'5px',color:'white'}} data-test="btn-signup">Sign-UP</button>
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