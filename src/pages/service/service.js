import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import Sidebar from '../../components/admin/services/sidebar'
import ServiceMain from '../../components/admin/services/serviceMain'

export default function Services() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-3'>
                    <Sidebar />
                </div>
                <div className='col-9'>
                    <ServiceMain/>
                </div>
            </div>
        </div>
    </div>
  )
}
