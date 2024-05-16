import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import Carousel from '../../components/admin/markets/carousel'
import Sidebar from '../../components/admin/markets/sidebar'
import NewlyListed from '../../components/admin/markets/newlyListed'


export default function Market() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <Sidebar/>
                </div>
                <div className='col-9'>
                    <Carousel/>
                    <NewlyListed/>
                </div>
            </div>
        </div>
    </div>
  )
}