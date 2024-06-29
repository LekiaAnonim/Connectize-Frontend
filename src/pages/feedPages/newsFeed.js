import React from 'react'
import FeedSideBar from '../../components/admin/feeds/feedSideBar'
import Feednav from '../../components/admin/feeds/feednav'
import Feedmain from '../../components/admin/feeds/feedmain'
import Suggested from '../../components/admin/feeds/suggested'

export default function NewsFeed() {
  return (
    <div style={{background:"#faf9f7"}} className=''>
        <div className='mx-5'>
          <div className='mb-5 pt-4'><Feednav/></div>
            <div className='row' style={{marginTop:"-2rem"}}>
                <div className='col-md-3 col-sm-none'>
                    <FeedSideBar/>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <h1 className='my-2'>Discover</h1>
                  <Feedmain/>
                </div>
                <div className='col-md-3 col-sm-none'>

                  <Suggested/>
                </div>
            </div>
        </div>
    </div>
  )
}
