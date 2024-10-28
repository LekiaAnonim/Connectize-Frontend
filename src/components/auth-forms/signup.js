import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom"


//const API_HOST = 'https://connectize.co/api/auth';

function Signup() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username: e.target.username.value,
            email: e.target.email.value,
            password1: e.target.password1.value,
            password2: e.target.password2.value
        }
        //console.log(newUser)

        fetch("https://connectize.co/api/auth/registration", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newUser })
        })

            .then(res => res.json())
            .then(data => console.log(data))
            .then(data => {
                alert('Registration Succesfull')
                navigate('/successpage')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='sm:mx-4 lg:mx-24 mt-4'>
                <Navbar.Brand href="#home">
                    <img src='/images/logo.png' style={{ height: "60px", width:"70px" }} alt='logo' />
                </Navbar.Brand>
            </div>
            <div className='bg-white grid grid-cols-10 sm:px-8 lg:mx-24 gap-6 mb-8'>
                {/* <div className='col-sm-12 col-md-6 col-lg-5 offset-1 mb-5'> */}
                <div className='lg:col-span-5 md:col-span-10 md:order-last col-span-10 order-last'>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1 style={{ marginTop: "4%" }}>Create new account</h1><br />
                            <div>
                                <label htmlFor='username'>Username</label><br /><br />
                                <input type='email' name='username' className='form-control' style={{ height: "50px" }} placeholder='Username@example.com' required />
                                {/* onChange={(e) => setUsername(e.target.value)} /> */}
                            </div><br />
                            <div>
                                <label>Company email</label><br /><br />
                                <input type='text' name='email' className='form-control' style={{ height: "50px" }} placeholder='Company@example.com' required />
                                {/* onChange={(e) => setEmail(e.target.value)} /> */}
                            </div><br />
                            <div>
                                <label>Password</label><br /><br />
                                <input type='password' name='password1' className='form-control' style={{ height: "50px" }} placeholder='**********' required />
                                {/* onChange={(e) => setPassword1(e.target.value)} /> */}
                            </div><br />
                            <div>
                                <label>Confirm Password</label><br /><br />
                                <input type='password' name='password2' className='form-control' style={{ height: "50px" }} placeholder='**********' required />
                                {/* onChange={(e) => setPassword2(e.target.value)} /> */}
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
                {/* <div className='col-sm-12 col-md-6 col-lg-5 text-white '> */}
                <div className='lg:col-span-5 md:grid lg:order-last md:col-span-8 col-span-10 hidden mb-10'>
                    <Navbar expand="md" className="bg-blue-950 md:bg-inherit mt-[-6rem]">
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
                    <div style={{ marginTop: "-10rem" }}>
                        <img src="./images/signup-image.png" style={{ width: "100%", height: "810px" }} alt='pics' />
                        <div className='d-flex' style={{ marginTop: "-30%", marginLeft: "10%" }}>
                            <h2>Already have an <br /> account?</h2>
                            <Link to="/login" className='btn btn-warning rounded-pill h-25 w-25 ms-4'
                            >Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup
