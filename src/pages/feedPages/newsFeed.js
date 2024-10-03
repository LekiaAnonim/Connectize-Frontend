import React from 'react'
import Feednav from '../../components/admin/feeds/feednav'
import Feedmain from '../../components/admin/feeds/feedmain'
import Suggested from '../../components/admin/feeds/suggested'
import SidebarLinear from '../../components/admin/feeds/side'
// import ResponsiveDrawer from '../../components/admin/feeds/sidemui'

export default function NewsFeed() {
  return (
    <div style={{background:"#faf9f7"}} className=''>
        <div className='mx-5'>
            <div className='row' style={{marginTop:""}}>
                <div className='col-lg-2 col-md-10 col-md-offset-2 col-sm-12'>
                  {/* <ResponsiveDrawer/> */}
                  <SidebarLinear/>
                </div>
                <div className='col-lg-7 col-md-10 col-md-offset-2 col-sm-12'>
                  {/* <div className='mb-3 pt-4 mt-3'><Feednav/></div> */}
                  <h1 className='my-2'>Discover</h1>
                  <Feedmain/>
                </div>
                <div className='col-lg-3 col-md-6 col-md-offset-2 col-sm-6'>
                  <div className='mt-5'>
                    <Suggested/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
