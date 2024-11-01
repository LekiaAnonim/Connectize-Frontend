import React from 'react'
import ReactECharts from 'echarts-for-react';


export default function Chart() {
  const option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00']
    },
    yAxis: {
        type: 'value',
        data: [0, 20, 40, 60, 80, 100]
    },
    series: [
        {
        name: 'Sales',
        type: 'line',
        smooth: true,
        data: [31, 40, 28, 50, 42, 82, 56],
        },
        {
        name: 'Revenue',
        type: 'line',
        smooth: true,
        data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
        name: 'Customers',
        type: 'line',
        smooth: true,
        data: [15, 11, 32, 18, 9, 24, 11]
        },
        
    ]
    };
    // const option = {
    //     tooltip: {
    //       trigger: 'axis'
    //     },
    //     legend: {
    //         data: ['Product1', 'Product2', 'Product3']
    //       },
    //     grid: {
    //       left: '3%',
    //       right: '4%',
    //       bottom: '3%',
    //       containLabel: true
    //     },
        
    //     xAxis: {
    //       type: 'category',
    //       boundaryGap: false,
    //       data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    //     },
    //     yAxis: {
    //       type: 'value'
    //     },
    //     series: [
    //       {
    //         name: 'Product1',
    //         type: 'line',
            
    //         data: [-60, -20, -60, 60, 0, 20, -60]
    //       },
    //       {
    //         name: 'Product2',
    //         type: 'line',
    //         stack: 'Total',
    //         data: [30, 0, 20, 0, -20, 0, 20]
    //       },
    //       {
    //         name: 'Product3',
    //         type: 'line',
    //         stack: 'Total',
    //         data: [-30, 20, 0, -20, -60, -20, 0]
    //       },
          
    //     ]
    //   };
  return (
    <div>
        <div className='row py-5'>
            <div className='col-sm-12 col-md-6 mb-5'>
                <div className='bg-white p-3 rounded'>
                    <div className='p-3'>
                        <p className='text-black-50'>sales</p>
                        <h2>5.987,37</h2>
                    </div>
                    <hr/>
                    <div>
                        <ReactECharts option={option} />
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 mb-5'>
                <div className='bg-white p-3 rounded'>
                    <div className='p-3'>
                        <p className='text-black-50'>ReachES</p>
                        <h2>5.987,34</h2>
                    </div>
                    <hr/>
                    <div>
                        <ReactECharts option={option} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
