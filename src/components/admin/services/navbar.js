
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import { Home, Message,Notification,Chartbar,Building,
        Usergroup,Setting} from '../../../icon';

function Navigationbar() {
  return (
    <div>
        <Navbar expand="md" className="bg-body-white">
            <Container>
                <Navbar.Brand href="#home">
                    <img src='/images/logo.png' style={{height:"60px"}} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-5">
                    <Nav.Link href="/login" className='fw-bold'><Home />Home</Nav.Link>
                    <Nav.Link href="#message" className='me-5 ms-5 fw-bold'><Message /></Nav.Link>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search anything"
                        className="rounded-pill text-black-50"
                        style={{width:"300px"}}
                        aria-label="Search"
                        />
                </Form>
                </Nav>
                <Nav className='ms-5 fw-bold'>
                    <Nav.Link href="#about"><Notification/></Nav.Link>
                    <Nav.Link href="#market"><Chartbar/></Nav.Link>
                    <Nav.Link href="#market"><Building/></Nav.Link>
                    <Nav.Link href="#market"><Usergroup/></Nav.Link>
                    <Nav.Link href="#market"><Setting/></Nav.Link>
                </Nav>
                <Nav className='ms-auto'>
                    <img src='/images/passportimg.png' alt='#' className='w-75 h-75'/>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigationbar