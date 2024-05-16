import React from 'react'
import { GreaterThan } from '../../../icon'

function Productdetails() {
  return (
    <div>
        <div className='row'>
          <div className='col-sm-12 col-md-6 mb-3'>
            <img src='images/Rectangle3.png' className='w-100' alt='#'/>
          </div>
          <div className='col-sm-12 col-md-6' style={{lineHeight:"15px"}}>
            <h6>Efficiency Unleashed: Mid-Tier <br/>Blend</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem accusantium</p>
            <h6>Description</h6>
            <p>Sed ut perspiciatis unde omnis iste<br/> natus error sit voluptatem accusantium</p>
            <ul>
                <li>Sed ut perspiciatis unde</li>
                <li>omnis iste natus error sit</li>
                <li>voluptatem</li>
                <li>accusantium</li>
            </ul>
            <button className='rounded-pill px-2 py-1 bg-black text-white me-3'>Chat seller <GreaterThan/></button>
            <button className='rounded-pill px-2 py-1 bg-white'>Chat seller</button>
          </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-6'>
                <h6 className='my-5'>Location</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648087732!2d3.1191397325001287!3d6.548028242383623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1715074059319!5m2!1sen!2sng" className='w-100' height="150" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-sm-12 col-md-6'>
                <h6 className='my-5'>Seller's information</h6>
                <div className='d-flex'>
                    <img src='images/Ellipsewww.png' className='me-2' alt="#" />
                    <div>
                        <h6>west land energy</h6>
                        <p>since 15th 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productdetails