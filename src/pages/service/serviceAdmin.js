import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import ServiceAdminMain from '../../components/admin/services/serviceAdminMain'
import Sidebar from '../../components/admin/markets/sidebar'

export default function ServiceAdmin() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <Sidebar/>
                </div>
                <div className='col-9'>
                    <ServiceAdminMain/>
                </div>
            </div>
        </div>
    </div>
  )
}
