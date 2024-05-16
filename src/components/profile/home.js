import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { GreaterThan, ArrowDown } from '../../icon';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/css/bootstrap-datepicker.min.css" integrity="sha512-34s5cpvaNG3BknEWSuOncX28vz97bRI59UnVtEEpFX536A7BtZSJHsDyFoCl8S7Dt2TPzcrCEoHBGeM4SUBDBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />


function Home() {
  return (
    <div style={{background:"#"}}>
         <Container>
            <Navbar.Brand href="#home">
                <img src='/images/logo.png'style={{height:"60px"}} alt='logo'/>
            </Navbar.Brand>
        </Container>
        <Container style={{marginLeft:"10%", marginRight:"10%"}}>
        <Navbar expand="md" className="bg-body-white">
            <Nav className="#">
                <Nav.Link href="#" className='border-bottom border-2 border-dark'>Personal Information<GreaterThan/></Nav.Link>
                <Nav.Link href="/contact">Contact <GreaterThan/></Nav.Link>
                <Nav.Link href="/address">Address</Nav.Link>
            </Nav>    
        </Navbar>
        </Container>
        <div className='container' style={{marginLeft:"10%", marginRight:"10%"}}>
            <div className='my-4'>
                <h4>Help us know more about you</h4>
                <p className='text-black-50'>Please fill in the details below</p>
            </div>
            <div>
                <img src='/images/pasportTwo.png' alt='#' className='py-4' style={{width:"10%"}} />
            </div>
            <form>
                <div className='row form-group'>
                    <div className='me-3 col-sm-6 col-md-4 py-4'>
                        <label>First Name</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"60%"}} placeholder='Example@companyname.com'/>
                        
                    </div>
                    <div className='col-sm-6 col-md-4 py-4'>
                        <label>Last Name</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"60%"}} placeholder='Enter your last name'/>
                    </div>
                </div>
                <div className='row form-group'>
                    <div className='me-3 col-sm-6 col-md-4'>
                        <label>Company Name</label><br/>
                        <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"50px"}} placeholder='Enter company name'/>
                        
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <label>Gender</label><br/>
                        <div className='d-flex'>
                            <input type='text' className='form-control border-0 mt-3' list="datalistOptions" id="exampleDataList" style={{background:"#EEEEEE", height:"50px"}}  placeholder='Male/Female'/>
                            <div style={{marginLeft:"-10%",marginTop:"7%"}}>
                                <ArrowDown  />
                            </div>
                            <datalist id="datalistOptions">
                                <option />
                                <option value="Male"/>
                                <option value="Female"/>
                            </datalist>
                        </div>
                            
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 me-4 py-4'>
                        <label>Role</label><br/>
                        <div className='d-flex'>
                            <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"50px"}} list="datalistOptions" id="exampleDataList" placeholder='What your role as a representative'/>
                            <div style={{marginLeft:"-10%",marginTop:"7%"}}>
                                <ArrowDown  />
                            </div>
                        </div>
                            <datalist id="datalistOptions">
                            <option />
                            <option value="Male"/>
                            <option value="Female"/>
                            </datalist>
                    </div>
                    <div className='col-sm-6 col-md-4 py-4'>
                        <label>Age</label><br/>
                        <input type='date' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"60%"}} list="datalistOptions" id="exampleDataList" placeholder='DD/MM/YY'/>
                    </div>
                    
                    {/* <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}
                </div>
                <Link to="/contact" className='btn btn-warning rounded my-4 py-2 shadow-lg px-4'>Next<GreaterThan/></Link>
            </form>

            {/* <div className="input-group date" data-provide="datepicker">
            <input type="text" className="form-control" id='date' />
            <div className="input-group-addon">
                <span className="glyphicon glyphicon-th"></span>
            </div>
            </div> */}
        </div>
        <footer className='text-center py-5'>
            <p>ALL RIGHT RESERVED &copy; 2024</p>
        </footer>
        {/* <script>
            $('#date').datepicker({
               
            })
        </script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/js/bootstrap-datepicker.min.js" integrity="sha512-LsnSViqQyaXpD4mBBdRYeP6sRwJiJveh2ZIbW41EBrNmKxgr/LFZIiWT6yr+nycvhvauz8c2nYMhrP80YhG7Cw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    </div>
    
  )
}

export default Home