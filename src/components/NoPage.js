
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"

function NoPage() {
  return (
    <div>
        <div className='container'>
          <Link to={"/"}>
            <img src='/images/logo.png' style={{height:"80px", paddingTop:"5px",marginBottom:"2%"}} alt='logo'/> 
          </Link>    
            <div className='mx-auto justify-content-center text-center'>
                <h1>Error 404: No Page</h1>
            </div>
        </div>
        <footer className='text-center py-5'>
            <p>ALL RIGHT RESERVED &copy; 2024</p>
        </footer>
    </div>
  )
}

export default NoPage