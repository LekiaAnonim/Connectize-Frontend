import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PauseOnHover from './slider';


function Carousel() {
  return (
    <div>
      <div className='d-flex mx-auto rounded-pill ps-1 pb-1' style={{background:"#E1E1E1",width:"150px"}}>
        <button className='bg-white rounded-pill mt-1 px-2 border border-none me-2' style={{height:"30px"}}>market</button>
        <Link to={"/service"} className='mt-1 text-decoration-none text-black'>services</Link>
      </div>
      <div>
        <h3 className='mb-5'>Recomended</h3>
        <PauseOnHover/>
      </div>
    </div>
  )
}

export default Carousel