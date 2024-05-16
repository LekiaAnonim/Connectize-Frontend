import React from 'react';
import ReactECharts from 'echarts-for-react';
import {ArrowDown}  from '../../../icon'

function Trends() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        smooth:'true',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      
    ]
  };
  
  return (
    <div>
        <div className='d-flex'>
            <h3 className='me-3'>Analysis</h3>
            <div className='mt-1 fw-bold'><ArrowDown/></div>
        </div>
        <p className='text-black-50'>Yearly Analysis</p>
        <div className='bg-white rounded'>
            <div className='ms-5'>
              <p className='text-black-50'>Market Trend Analysis</p>
              <h2>12589k</h2>
            </div>
            <ReactECharts option={option} />
        </div>

    </div>
  )
}
export default Trends;
