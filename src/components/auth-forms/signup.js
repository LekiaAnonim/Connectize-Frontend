import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate } from "react-router-dom"
import axios from 'axios';
//import NavDropdown from 'react-bootstrap/NavDropdown';


//const API_HOST = 'https://connectize.co/api/auth';

function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const navigate = useNavigate()


    //axios.defaults.withCredentials=true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://connectize.co/api/auth/registration/", { username, email, password1, password2 })
        .then(res=>{
            if(res){
                console.log(res)
                alert('Registration Succesfull')
                navigate('/successpage')
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div className='bg-white row'>
                <div className='col-sm-12 col-md-6 col-lg-5 ms-5 mb-5'>
                    <Navbar.Brand href="#home">
                        <img src='/images/logo.png' style={{ height: "60px" }} alt='logo' />
                    </Navbar.Brand>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1 style={{ marginTop: "4%" }}>Create new account</h1><br />
                            <div>
                                <label htmlFor='username'>Username</label><br /><br />
                                <input type='email' className='form-control' style={{ height: "50px" }} placeholder='Username@example.com' required
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div><br />
                            <div>
                                <label>Company email</label><br /><br />
                                <input type='text' className='form-control' style={{ height: "50px" }} placeholder='Company@example.com' required
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div><br />
                            <div>
                                <label>Password</label><br /><br />
                                <input type='password' className='form-control' style={{ height: "50px" }} placeholder='**********' required
                                    onChange={(e) => setPassword1(e.target.value)} />
                            </div><br />
                            <div>
                                <label>Confirm Password</label><br /><br />
                                <input type='password' className='form-control' style={{ height: "50px" }} placeholder='**********' required
                                    onChange={(e) => setPassword2(e.target.value)} />
                            </div><br />
                            <div>
                                <input type='checkbox' /> I agree to <a><b>Terms and Condition</b></a>    
                            </div><br />
                            <div>
                                <button type='submit' className='btn btn-dark w-75 rounded-pill' style={{ height: "50px" }}>Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 text-white'>
                    <Navbar expand="md" className="bg-body-white">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto me-4 text-white gap-4">
                                    <Nav.Link href="/" className='text-white h6'>Home</Nav.Link>
                                    <Nav.Link href="/service" className='text-white h6'>Service</Nav.Link>
                                    <Nav.Link href="/about" className='text-white h6'>About</Nav.Link>
                                    <Nav.Link href="/market" className='text-white h6'>Market</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div style={{ marginTop: "-4rem" }}>
                        <img src="./images/signup-image.png" style={{ width: "100%", height: "710px" }} alt='pics' />
                    </div>
                    <div className='d-flex' style={{ marginTop: "-30%", marginLeft: "10%" }}>
                        <h2 >Already have an <br /> account?</h2>
                        <Link to="/login" className='btn btn-warning rounded-pill h-25 w-25 ms-4'
                        >Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
