import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard(props) {
  let {remote,control,tweet,image,westland,view,bookmark,bg} = props
  return (
    <div>
        {/* <div className='mx-2 rounded p-3' style={{background:"#faf9f7"}}> */}
        <div className='mx-2 rounded p-3' style={bg}>
            <div className='d-flex '>
                <h6>{remote}<br/>{control}</h6>
                <div className='ms-auto'>{bookmark}</div>
            </div>
            <p>{tweet} </p>
            <hr/>
            <div className='d-flex align-items-center'>
                <img src={image} width={"50px"} alt='#'/>
                <p className='ms-3'>{westland}</p>
                <Link to={"/serviceoverview"} className='rounded-pill ms-auto bg-warning px-2 py-1 border border-none text-decoration-none text-black'>{view}</Link>
            </div>
        </div>
    </div>
  )
}
