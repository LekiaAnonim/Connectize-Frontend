import React from 'react'
import Feedmain from './feedmain'
import Suggested from './suggested'

function Anthome() {
  return (
    <div className='row'>
        <div className='col-lg-9 col-md-10 col-md-offset-2 col-sm-12'>
            <h1 className='my-2'>Discover</h1>
            <Feedmain/>
        </div>
        <div className='col-lg-3 col-md-6 col-md-offset-2 col-sm-10'>
            <div className='mt-5'>
            <Suggested/>
            </div>
        </div>
    </div>
  )
}

export default Anthome