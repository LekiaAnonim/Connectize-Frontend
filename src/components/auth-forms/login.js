import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <>
    <div className='d-flex'>
        <div className='d-flex bg-white row' 
        style={{width:"80%", marginLeft:"10%",paddingLeft:"5%",width:"1000px"}}>
            <div className='col-md-6'>
                <Navbar expand="md" className="bg-body-white">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='/images/logo.png' style={{height:"60px"}} alt='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/login">Home</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#market">Market</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

                
                <form className='pe-20 mb-3'>
                    <div>
                        <h1 style={{marginTop:"10%"}}>Login to your account</h1><br/>
                        <label>Company email</label><br/><br/>
                        <input type='text' className='form-control w-75'  placeholder='Company@example.com' /><br/>
                        <label>Password</label><br/><br/>
                        <input type='password' className='form-control w-75'  placeholder='********' /><br/>
                        <input type='checkbox' /> I agree to <a><b>Terms and Condition</b></a><br/><br/>
                        <button className='btn btn-warning w-75 rounded-pill'>Login</button><br/><br/>
                        Don't have an accout<Link to="/signup" className='text-dark ms-2'> <b>Signup</b></Link>
                    </div>
                </form>
            </div>
            <div className='ps-3 col-md-6 text-white'>
                <img src="./images/signup-image.png" className='h-75' style={{width:"140%"}} alt='pics' />
                <div style={{marginTop:"-30%",marginLeft:"10%"}}>
                    <h2>
                        Don't have an account ?  
                    </h2>
                    <p>
                        <Link to={'/signup'} className='text-white'>Register</Link> to access all the features of our services and manage your business all in one platform 
                    </p>
                </div>
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Login