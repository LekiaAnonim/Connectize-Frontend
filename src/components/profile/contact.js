import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { GreaterThan,ArrowLeft } from '../../icon';


function Contact() {
  return (
    <div style={{background:"#"}}>
         <Container>
        <Navbar.Brand href="#home">
            <img src='/images/logo.png'style={{height:"60px"}} alt='logo'/>
        </Navbar.Brand>
        <Navbar expand="md" className="bg-body-white">
            <Nav className="#">
                <Nav.Link href="/home" >Personal Information<GreaterThan/></Nav.Link>
                <Nav.Link href="#" className='border-bottom border-2 border-dark'>Contact <GreaterThan/></Nav.Link>
                <Nav.Link href="/address">Address</Nav.Link>
            </Nav>    
        </Navbar>
        </Container>
        <div className='container'>
            <div className='my-4'>
                <h4>Let us and other companies reach out to you</h4>
                <p className='text-black-50'>Please fill in the details below</p>
            </div>
            
            <form>
                <div className='row form-group'>
                    <div className='me-3 col-sm-6 col-md-4 py-4'>
                        <label>Company Email</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"60%"}} placeholder='Example@companyname.com'/>
                        
                    </div>
                    <div className='col-sm-6 col-md-4 py-4'>
                        <label>Phone Number</label><br/>
                        <input type='tel' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"60%"}} placeholder='+23425555555'/>
                    </div>
                </div>
                <div className='row form-group'>
                    <div className='col-sm-6 col-md-4'>
                        <label>Personal Email</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"60%"}} placeholder='Example@companyname.com'/>
                        
                    </div>
                </div>
                
                <div className='row my-4'>
                <Link to="/home" className='btn rounded my-4 ms-2 py-2 shadow-lg px-4 col-2' style={{background:"#FFFAB7"}}><ArrowLeft/>Back</Link>
                <Link to="/address" className='btn btn-warning rounded my-4 me-2 py-2 shadow-lg px-4 col-2 offset-4'>Next<GreaterThan/></Link>
                </div>
            </form>
        </div>
        <footer className='text-center py-5'>
            <p>ALL RIGHT RESERVED &copy; 2024</p>
        </footer>
    </div>
  )
}

export default Contact