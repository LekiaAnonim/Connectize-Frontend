import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { GreaterThan,ArrowLeft } from '../../icon';


function Bio() {
  return (
    <div style={{background:"#"}}>
         <Container>
        <Navbar.Brand href="#home">
            <img src='/images/logo.png'style={{height:"60px"}} alt='logo'/>
        </Navbar.Brand>
        <Navbar expand="md" className="bg-body-white">
            <Nav className="#">
                <Nav.Link href="/home" >Personal Information<GreaterThan/></Nav.Link>
                <Nav.Link href="/contact">Contact <GreaterThan/></Nav.Link>
                <Nav.Link href="/address">Address <GreaterThan/></Nav.Link>
                <Nav.Link href="#" className='border-bottom border-2 border-dark'>Bio</Nav.Link>
            </Nav>    
        </Navbar>
        </Container>
        <div className='container'>
            <div className='my-4'>
                <h4>Create your  bio and add <br/>other infomation</h4>
                <p className='text-black-50'>Please fill in the details below</p>
            </div>
            
            <form>
                <div className='row form-group'>
                    <div className='me-3 col-sm-6 col-md-4 py-4'>
                        <label>Bio</label><br/>
                        <textarea className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"120%"}} placeholder='Say something'></textarea>
                        
                    </div>
                    <div className='col-sm-6 col-md-4 py-4'>
                        <label>Website Link</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"60%"}} placeholder='westlandoil.com'/>
                    </div>
                </div>
                <div className='row form-group'>
                    <div className='me-3 col-sm-6 col-md-4 py-4' style={{marginTop:"3%"}}>
                        <label>State/Province</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"75%"}} placeholder='Abuja'/>
                    </div>
                    <div className='col-sm-6 col-md-4 py-1'>
                        <label>Social media link</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"40%"}} placeholder='eg linkedin'/>
                    </div>
                </div>
                
                
                <div className='row my-4'>
                    <Link to="/address" className='btn rounded my-4 ms-2 py-2 shadow-lg bg-warning px-4 col-2'><ArrowLeft/>Back</Link>
                    <Link to="/overview" className='btn btn-warning rounded my-4 me-2 py-2 shadow-lg px-4 col-2 offset-4'>Next<GreaterThan/></Link>
                </div>
            </form>
        </div>
        <footer className='text-center py-5'>
            <p>ALL RIGHT RESERVED &copy; 2024</p>
        </footer>
    </div>
  )
}

export default Bio