import React from 'react'
import { GreaterThan } from '../../../icon'

function NewlyListed() {
  return (
    <div className='pb-5'>
        <div className='d-flex mt-5'>
            <h3>newlyListed</h3>
            <p className='ms-auto'>See All <GreaterThan/></p>
        </div>
        <div className='row'>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle2.png' className='w-100'/>
                <p>Premium Black Gold<br/> Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle4.png' className='w-100'/>
                <p>Premium Black Gold<br/> Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle5.png' className='w-100'/>
                <p>Premium Black Gold <br/>Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle6.png' className='w-100'/>
                <p>Premium Black Gold<br/> Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle7.png' className='w-100 rounded'/>
                <p>Premium Black Gold<br/> Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle8.png' className='w-100 rounded'/>
                <p>Premium Black Gold<br/> Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle9.png' className='w-100 rounded'/>
                <p>Premium Black Gold <br/>Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <img src='images/Rectangle10.png' className='w-100 rounded'/>
                <p>Premium Black Gold<br/> Reserve</p>
                <button className='bg-dark text-white rounded-pill px-1'>Chat seller</button>
            </div>
        </div>
    </div>
  )
}

export default NewlyListed