import React from 'react'

export default function ServiceCard({remote,control,tweet,image,westland,view,bookmark}) {
  return (
    <div>
        <div className='mx-2 rounded p-3' style={{background:"#faf9f7"}}>
            <div className='d-flex '>
                <h6>{remote}<br/>{control}</h6>
                <div className='ms-auto'>{bookmark}</div>
            </div>
            <p>{tweet} </p>
            <hr/>
            <div className='d-flex align-items-center'>
                <img src={image} width={"50px"}/>
                <p className='ms-3'>{westland}</p>
                <button className='rounded-pill ms-auto bg-warning w-25 px-2 py-1 border border-none'>{view}</button>
            </div>
        </div>
    </div>
  )
}
