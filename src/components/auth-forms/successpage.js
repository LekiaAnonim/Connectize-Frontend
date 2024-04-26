import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"


function SuccessPage() {
  return (
    <div>
        <div className='container'>
            <img src='/images/logo.png'style={{height:"60px",paddingTop:"5px",marginBottom:"2%"}} alt='logo'/>     
            <div className='mx-auto justify-content-center text-center'>
                <h1>Congratulations !!!<br/>your registration was successfull</h1>
                <img src='/images/passportThree.png' className='w-25 py-5' />
                <div>
                    <Link to="/login" className='btn btn-warning w-25 rounded-pill'>Login</Link>
                </div>
            </div>
        </div>
        <footer className='text-center py-5'>
            <p>ALL RIGHT RESERVED &copy; 2024</p>
        </footer>
    </div>
  )
}

export default SuccessPage