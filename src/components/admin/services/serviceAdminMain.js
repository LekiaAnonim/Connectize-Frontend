import React from 'react'
import { GreaterThan } from '../../../icon'

export default function ServiceAdminMain() {
  return (
    <div>
        <div className='bg-white px-3 rounded'>
            <h1 className='py-4'>List new Services</h1>
            <div>
                <div className='row'>
                    <div className='col-sm-12 col-md-10 col-lg-5 mb-5'>
                        <label className='py-3'>Service title</label>
                        <input type='text'className='form-control h-75 border border-none' style={{background:"#faf9f7"}} placeholder='Should not be more than 250 characters'/>
                    </div>
                    <div className='col-sm-12 col-md-10 col-lg-5 mb-5'>
                        <label className='py-3'>Choose categgory</label>
                        <input type='text'className='form-control h-75 border border-none' style={{background:"#faf9f7"}} placeholder='Refined oil'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-10 col-lg-5 mb-5'>
                        <label className='py-3'>Summary of service</label>
                        <input type='text'className='form-control h-100 border border-none' style={{background:"#faf9f7"}} placeholder='Should not be more than 450 characters'/>
                    </div>
                    <div className='col-sm-12 col-md-10 col-lg-5 mb-5'>
                        <label className='py-3'>Short description</label>
                        <input type='text'className='form-control h-100 border border-none' style={{background:"#faf9f7"}} placeholder='Should not be more than 1450 characters'/>
                    </div>
                </div>
            </div>
            <button className='rounded-pill bg-dark text-white my-5 px-3 py-1 border border-none'>List Service |<GreaterThan/></button>
    
        </div>
        <footer className='py-5 text-center'>Connectize &copy; 2024, All right resserved</footer>
    </div>
  )
}
