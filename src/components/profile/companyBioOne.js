import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { GreaterThan,ArrowLeft,ArrowDown } from '../../icon';


function CompanyBioOne() {
  return (
    <div style={{background:"#"}}>
         <Container>
        <Navbar.Brand href="#home">
            <img src='/images/logo.png'style={{height:"60px"}} alt='logo'/>
        </Navbar.Brand>
        </Container>
        <Link to="/overview" className='btn rounded my-4 py-2 shadow-lg px-2 col-1 bg-white' style={{marginLeft:"80%"}}>Next<GreaterThan/></Link>
        <div style={{marginLeft:"20%"}}>
            <div className='my-4'>
                <h4>Provide legal information to show your</h4>
                <h4>company's credibility to do business</h4>
                <p className='text-black-50'>Please fill in the details below</p>
            </div>
            
            <form>
                <div className='col-sm-6 col-md-6 py-2'>
                    <label>Company's registration No.</label><br/>
                    <input type='text' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"50px"}} placeholder='eg. VAT, TVN'/>   
                </div>

                <div className='col-sm-6 col-md-6'>
                    <label>Company's registration date</label><br/>
                    <input type='date' className='form-control border-0 mt-3' style={{background:"#EEEEEE",height:"50px"}} placeholder='01/02/2001'/>
                </div>
  
                <div className='me-3 col-sm-6 col-md-6 py-2' style={{marginTop:"3%"}}>
                    <label>Company's average annual revenue</label><br/>
                    <div className='d-flex'>
                        <input type='text' className='form-control border-0 mt-3' list="datalistOptions" id="exampleDataList" style={{background:"#EEEEEE", height:"50px"}}  placeholder='Select range of average annual income'/>
                        <div style={{marginLeft:"-10%",marginTop:"5%"}}>
                            <ArrowDown  />
                        </div>
                        <datalist id="datalistOptions">
                            <option />
                            <option value="$1000-$2000"/>
                            <option value="$2000-$3000"/>
                            <option value="$3000-$4000"/>
                            <option value="$4000-$5000"/>
                            <option value="$5000-$6000"/>
                            <option value="$6000-$7000"/>
                            <option value="$7000-$8000"/>
                            <option value="$8000-$9000"/>
                        </datalist> 
                    </div>  
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

export default CompanyBioOne