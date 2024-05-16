import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import Sidebar from '../../components/admin/markets/sidebar'
import Trends from '../../components/admin/analysis/trends'
import Chart from '../../components/admin/analysis/chart'


export default function Analysis() {
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <Sidebar/>
                </div>
                <div className='col-9'>
                    <Trends/>
                    <Chart/>
                </div>
            </div>
        </div>
    </div>
  )
}