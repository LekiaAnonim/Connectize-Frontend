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
        style={{paddingLeft:"5%"}}>
            <div className='col-md-7 pe-5'>
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

                
                <form>
                    <div>
                        <h1 style={{marginTop:"10%"}}>Login to your account</h1><br/>
                        <label>Company email</label><br/><br/>
                        <input type='text' className='form-control w-100' style={{height:"50px"}}  placeholder='Company@example.com' /><br/>
                        <label>Password</label><br/><br/>
                        <input type='password' className='form-control w-100' style={{height:"50px"}}  placeholder='********' /><br/>
                        <input type='checkbox' /> I agree to <a><b>Terms and Condition</b></a><br/><br/>
                        <button className='btn btn-warning w-100 rounded-pill' style={{height:"50px"}}>Login</button><br/><br/>
                        Don't have an accout<Link to="/signup" className='text-dark ms-2'> <b>Signup</b></Link>
                    </div>
                </form>
            </div>
            <div className='col-md-5 text-white'>
                <div className='w-100 '>
                    <img src="./images/signup-image.png" className='#' style={{width:"162%", height:"650px"}} alt='pics' />
                </div>
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