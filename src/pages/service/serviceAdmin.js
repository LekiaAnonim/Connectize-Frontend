import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import Sidebar from '../../components/admin/services/sidebar'
import ServiceAdminMain from '../../components/admin/services/serviceAdminMain'

export default function ServiceAdmin() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-3'>
                    <Sidebar />
                </div>
                <div className='col-9'>
                    <ServiceAdminMain/>
                </div>
            </div>
        </div>
    </div>
  )
}
