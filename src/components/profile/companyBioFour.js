import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { GreaterThan,ArrowLeft,ArrowDown } from '../../icon';


function CompanyBioFour() {
  return (
    <div style={{background:"#"}}>
         <Container>
        <Navbar.Brand href="#home">
            <img src='/images/logo.png'style={{height:"60px"}} alt='logo'/>
        </Navbar.Brand>
        </Container>
        <Link to="/overview" className='btn rounded my-4 py-2 shadow-lg px-2 col-1 bg-white' style={{marginLeft:"80%"}}>skip<GreaterThan/></Link>
        <div style={{marginLeft:"20%"}}>
            <div className='my-4'>
                <h4>Let’s know a little more about</h4>
                <h4>your company</h4>
                <p className='text-black-50'>Please fill in the details below</p>
            </div>
            
            <form>
                <div className='col-sm-6 col-md-6 py-2'>
                    <label>Short description</label><br/>
                    <textarea type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"150px"}} placeholder='write a short description of your company here...'></textarea>   
                </div>

                <div className='col-sm-6 col-md-6'>
                    <label>Company's size</label><br/>
                    <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"50px"}} placeholder='select range'/>
                </div>
  
                <div className='me-3 col-sm-6 col-md-6 py-2'>
                    <label>Region & City</label><br/>
                    <div className='d-flex'>
                    <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"50px"}} placeholder='select city'/>
                    <div style={{marginLeft:"-25px",marginTop:"5%"}}>
                        <ArrowDown  />
                    </div>
                    </div>
                </div>

                
                <div className='col-sm-6 col-md-6 py-2'>
                    <label>Organization type</label><br/>
                    <div className='d-flex'>
                        <input type='text' className='form-control border-0 mt-3' list="datalistOptions" id="exampleDataList" style={{background:"#EEEEEE", height:"50px"}}  placeholder='what is your organization type'/>
                        <div style={{marginLeft:"-25px",marginTop:"5%"}}>
                            <ArrowDown  />
                        </div>
                    </div>
                    <datalist id="datalistOptions">
                        <option />
                        <option value="Male"/>
                        <option value="Female"/>
                    </datalist>   
                </div>
                <div className='row my-4'>
                    <Link to="/address" className='btn rounded my-4 ms-2 py-2 shadow-lg bg-warning px-2 col-1'><ArrowLeft/>Back</Link>
                    <Link to="/overview" className='btn btn-warning rounded my-4 py-2 shadow-lg px-2 offset-4 col-1'>Next<GreaterThan/></Link>
                </div>
            </form>
        </div>
        <footer className='text-center py-5'>
            <p>ALL RIGHT RESERVED &copy; 2024</p>
        </footer>
    </div>
  )
}

export default CompanyBioFour