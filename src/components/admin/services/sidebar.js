import React from 'react'
import { Building,CircleFill,Dollar,GreaterThan,History,Notification, Squares, } from '../../../icon'

function Sidebar() {
  return (
    <div className='#'>
        <div className='bg-white ps-4 pt-4 pb-5 shadow rounded'>
            <h3>Services</h3>
            <div className='d-flex'>
                <p><Building/></p>
                <p className='ms-2'>Market</p>
            </div>
            <div className='d-flex'>
                <p><Notification/></p>
                <p className='ms-2'>Notification</p>
            </div>
            <div className='d-flex'>
                <p><Dollar /></p>
                <p className='ms-2'>Wish-list</p>
            </div>
            <div className='d-flex'>
                <p><History/></p>
                <p className='ms-2'>History</p>
            </div>
            <button className='rounded-pill bg-warning border border-none py-1 mb-3 w-75'>List new product | <GreaterThan/></button>
            <div className='d-flex'>
                <p><Squares/></p>
                <p className='ms-2'>Categories</p>
            </div>
            <div className='d-flex'>
                <p><CircleFill/></p>
                <p className='ms-2'>Remote Services</p>
            </div>
            <div className='d-flex'>
                <p><CircleFill/></p>
                <p className='ms-2'>Marketplaces</p>
            </div>
            <div className='d-flex'>
                <p><CircleFill/></p>
                <p className='ms-2'>Marketplaces</p>
            </div>
            <div className='d-flex'>
                <p><CircleFill/></p>
                <p className='ms-2'>Marketplaces</p>
            </div>
            <div className='d-flex'>
                <p><CircleFill/></p>
                <p className='ms-2'>Marketplaces</p>
            </div>
            <div className='d-flex'>
                <p><CircleFill/></p>
                <p className='ms-2'>Marketplaces</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar