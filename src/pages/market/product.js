import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import SidebarMenu from '../../components/admin/markets/sidebar'
import Productdetails from '../../components/admin/products/productdetails'
import NewProducts from '../../components/admin/products/newProducts'
import { Sidebar} from "@asphalt-react/sidebar"


export default function Product() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <Sidebar>
                        <SidebarMenu/>
                    </Sidebar>
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