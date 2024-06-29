import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Reviews() {
    let Review = ({image,cody,icon,date,text})=>{
        return(
            <>
            <div className='d-flex'>
                <div>
                    <img src={image} style={{width:"100px",marginRight:"7px",marginTop:"10px"}} alt='#'/>
                </div>
                <div style={{lineHeight:"1"}}>
                    <div className='d-flex '>
                        <h4>{cody}</h4>
                        <p className='ms-auto'>{icon}</p>
                    </div>
                    <div>
                        <p>{date}</p>
                        <p>{text}
                        </p>
                    </div>
                </div>
            </div>
        </>
        )
    }
  return (
    <div className='bg-white my-4 p-3 rounded'>
        <h1 className='p-2'>Reviews</h1>
        <div>
            <Review
                image="images/bmwprofilepicture.png"
                cody="cody fisher"
                icon = {<MoreHorizIcon/>}
                date = "05-06-2024"
                text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem   accusantium"
            />
        </div>
        <hr/>
        <div>
            <Review
                image="images/bmwprofilepicture.png"
                cody="Mitsubishi"
                icon = {<MoreHorizIcon/>}
                date = "05-06-2024"
                text = "Sed ut perspiciatis unde omnis iste natus error"
            />
        </div>
    </div>
  )
}
