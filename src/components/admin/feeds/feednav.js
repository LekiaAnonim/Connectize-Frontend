import {Search} from '@mui/icons-material';
import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Chartbar, Setting } from '../../../icon';
import Container from 'react-bootstrap/Container';
import FeedsModal from './modal';

export default function Feednav() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="userprofile">
                    <img src='images/iconloveclip.PNG' className='rounded-pill' style={{width:"3rem"}} alt='#'/>
                        <img src='images/iconprofile.PNG' className='rounded-pill' alt='#' style={{marginLeft:"-10px",width:"3rem"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto gap-4">
                    <Form className='d-flex'>
                        <input type='text' className="border border-none form-control rounded-pill text-black-50" placeholder='      search anything' style={{width:"20rem"}}/> 
                        <div className='text-black-50 mt-2'><Search style={{marginLeft:"-19rem"}}/></div>
                    </Form>
                    <Nav.Link href="#action1" className='text-black'><FeedsModal/></Nav.Link>
                    <Nav.Link href="/analysis" className='text-black'><Chartbar/></Nav.Link>
                    <Nav.Link href="#action1" className='text-black'><Setting/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
