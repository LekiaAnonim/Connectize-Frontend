import React from 'react'


export default function ProductCard(props){
  let {image,image1,text,icon,icon1,icon2,connect,gallery}=props
  
  return(
    <>
      <div className='bg-white p-4 mb-3' style={{marginTop:"-2rem"}}>
            <div className='row py-3' style={{background:"#faf9f7"}}>
              <div className='col-sm-12 col-md-12 col-lg-4'>
                <img src={image} style={{width:"100%",height:"80%",borderRadius:"20px"}} alt='#' />
              </div>
              <div className='col-sm-12 col-md-12 col-lg-7 me-2'>
                <div className='d-flex'>
                  <img src={image1} className='my-2 me-2 rounded-pill' style={{height:"35px"}} alt='#'/>
                  <p>{text}</p>
                  <p className='ms-5'>{icon}</p>
                </div>
                <hr style={{marginTop:"-2px"}}/>
                <div className='d-flex'>
                  {gallery}
                  <div className='ms-auto d-flex'>
                    {icon1}
                    178k
                    <p className='ms-2'>{icon2}</p>
                  </div>
                </div>
                <button className='rounded-pill px-2 bg-black text-white mt-2'>{connect}</button> 
              </div>
            </div>
            
        </div>
    </>
  )
}
