import React from 'react'
import { Check, Heart, Threedot } from '../../../icon'
import {MessageOutlined, Share, Download} from '@mui/icons-material'

export default function Company(){
    let Profile=()=>(
      <div className=''>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-6 d-flex'>
            <div><img src='images/passport16.PNG' style={{width:"4rem"}} className='rounded-pill' alt='#'/></div>
            <h4 className='mt-3'>Dangote oil</h4>
            <div className='mt-3'><Check /></div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-6 d-flex'>
            <p className='text-black-50 mt-3'>@dangote . 14s</p>
            <p className='ms-auto me-5 mt-3'><Threedot/></p>
          </div>
        </div>
        <div>
          <p className='my-3'>This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis </p>
        </div>
      </div>
    )
    return(
      <div>
        <div className='bg-white p-4 rounded mb-5 mt-3'>
        <Profile/>
          <div className=''>
              <div className='row'>
                <div className='col-md-4 col-sm-12 mb-4'><img src='images/company1.PNG' className='w-100 h-100' alt='#'/></div>
                <div className='col-md-5 col-sm-12 mb-4'><img src='images/company2.PNG' className='w-100 h-100' alt='#'/></div>
                <div className='col-md-3 col-sm-12 mb-4'><img src='images/company3.PNG' className='w-100 h-100' alt='#'/></div>
              </div>

              <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                  <div className="w-25 d-flex mb-4">
                    <img src="images/passport9.PNG" style={{width:"2.5rem"}} alt="#" />
                    <img src="images/passport10.PNG" style={{marginLeft:"-4px",width:"2.5rem"}} alt="#" />
                    <img src="images/passport11.PNG" style={{marginLeft:"-4px",width:"2.5rem"}} alt="#" />
                    <img src="images/passport12.PNG" style={{marginLeft:"-4px",width:"2.5rem"}} alt="#" />
                    <img src="images/passportimg1.PNG" style={{marginLeft:"-4px",width:"2.5rem"}} alt="#" />
                  </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 d-flex'>
                  <div className='d-flex ms-auto gap-1'>
                    <MessageOutlined/>
                    <Heart/>
                    <Download/>
                    <Share/>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <hr/>
        <Profile/>
        <hr/>
        <Profile/>
        <hr/>
      </div>
    )
  }