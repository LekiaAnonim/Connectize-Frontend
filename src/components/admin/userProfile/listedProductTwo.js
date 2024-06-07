
export default function ProductCardTwo({image,image1,text,icon,icon1,icon2,image2,image3,connect,image4,image5}){
    return(
      <>
        <div className='bg-white p-3' style={{marginTop:"-5%",borderRadius:"5%"}}>
              <div className='d-flex py-3 px-2 rounded' style={{background:"#faf9f7"}}>
                <img src={image}style={{width:"150px",height:"160px"}} alt='#' />
                <div className='ms-2'>
                  <div className='d-flex'>
                    <img src={image1} className='my-2 me-2' style={{height:"30px"}} alt='#'/>
                    <p>{text}</p>
                    <p className='ms-5'>{icon}</p>
                  </div>
                  <hr style={{marginTop:"-2px"}}/>
                  <div className='d-flex'>
                    <div>
                      <img src={image3} alt='#'/>
                      <img src={image2} style={{marginLeft:"-5px"}} alt='#'/>
                      <img src={image4} style={{marginLeft:"-5px",width:"28px"}} alt='#'/>
                      <img src={image5} style={{marginLeft:"-5px"}} alt='#'/>
                    </div>
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