import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
//import NavDropdown from 'react-bootstrap/NavDropdown';


function Signup() {
  return (
    <>
    <div className='row'>
        <div className='d-flex bg-white row' 
        style={{width:"80%", marginLeft:"10%",paddingLeft:"5%"}}>
        <div className='col-md-6'>
            <Navbar expand="md" className="bg-body-white">
            <Container>
                <Navbar.Brand href="#home">
                    <img src='/images/logo.png'style={{height:"60px"}} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/login">Home</Nav.Link>
                    <Nav.Link href="#service">Service</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#market">Market</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            
            <form className='pe-20'>
                <div>
                    <h1 style={{marginTop:"10%"}}>Create new account</h1><br/>
                    <label>Company email</label><br/><br/>
                    <input type='text' className='form-control w-75' placeholder='Company@example.com' required/><br/>
                    <label>Password</label><br/><br/>
                    <input type='password' className='form-control w-75'  placeholder='**********' required /><br/>
                    <label>Confirm Password</label><br/><br/>
                    <input type='password' className='form-control w-75' placeholder='**********' required/><br/>
                    <input type='checkbox' /> I agree to <a><b>Terms and Condition</b></a><br/><br/>
                    <Link to={"/successpage"} className='btn btn-dark w-75 rounded-pill'>Sign up</Link><br/><br/>
                    <div>Don't have an account <a href='#' className='text-black'><b>Sign up</b></a></div>
                </div>
            </form>
        </div>
        <div className='ps-4 col-md-6 text-white'>
            <img src="./images/signup-image.png" className='w-100 h-100' alt='pics' />
            <div className='d-flex' style={{marginTop:"-30%",marginLeft:"10%"}}>
                <h2 >Already have an <br/> account?</h2> 
                <Link to="/login" className='btn btn-warning rounded-pill h-25 w-25 ms-4'
                >Login</Link>
            </div>
        </div>
        </div>
        <hr />
    </div>
    
    </>
  )
}

export default Signup