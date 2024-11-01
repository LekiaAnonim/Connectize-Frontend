import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import SidebarMenu from '../../components/admin/markets/sidebar'
import NewListing from '../../components/admin/listing/newListing'


export default function Listing() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <SidebarMenu/>
                </div>
                <div className='col-9'>
                    <NewListing/>
                </div>
            </div>
        </div>
    </div>
  )
}