import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import Sidebar from '../../components/admin/markets/sidebar'
import Productdetails from '../../components/admin/products/productdetails'
import NewProducts from '../../components/admin/products/newProducts'



export default function Product() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <Sidebar/>
                </div>
                <div className='col-9'>
                    <Productdetails/>
                    <NewProducts/>
                </div>
            </div>
        </div>
    </div>
  )
}