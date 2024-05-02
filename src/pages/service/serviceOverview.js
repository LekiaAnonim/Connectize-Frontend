import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import Overviewside from '../../components/admin/services/overviewside'
import OverviewDetails from '../../components/admin/services/overviewDetails'

export default function ServiceOverView() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-5'>
                    <Overviewside/>
                </div>
                <div className='col-7'>
                    <OverviewDetails/>
                </div>
            </div>
        </div>
    </div>
  )
}
