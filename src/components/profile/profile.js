import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"


function Profile() {
  return (
    <div>
        <div className='container'>
            <img src='/images/logo.png' style={{height:"60px",paddingTop:"5px",marginBottom:"2%"}} alt='logo'/>     
            <div className='mx-auto justify-content-center text-center'>
                <h1>Would you like to set up <br/>you’re profile now</h1>
                <img src='/images/pasportOne.png' alt='passport' className='w-25 my-5' />
                <div>
                    <Link to="/home" className='btn btn-warning w-25 rounded-pill me-4'>Let's Go</Link>
                    <button className='btn btn-secondary w-25 rounded-pill'>Not Now</button>
                </div>
            </div>
        </div>
        <footer className='text-center py-5'>
            <p>ALL RIGHT RESERVED &copy; 2024</p>
        </footer>
    </div>
  )
}

export default Profile