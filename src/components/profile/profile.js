import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"


function Profile() {
  return (
    <div>
        <div className='container'>
            <img src='/images/logo.png' style={{height:"60px",paddingTop:"5px",marginBottom:"2%"}} alt='logo'/>     
            <div className='mx-auto justify-content-center text-center'>
                <h1>Would you like to set up <br/>your profile now</h1>
                <img src='/images/pasportOne.png' alt='passport'style={{width:"150px"}} className='my-5' />
                <div>
                    <Link to="/home" style={{width:"250px"}} className='btn btn-warning rounded-pill mb-3 ms-3'>Let's Go</Link>
                    <button style={{width:"250px"}} className='btn btn-secondary rounded-pill mb-3 ms-3'>Not Now</button>
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