import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

function Suggested() {
    let SuggestedCard=({image,title,social})=>{
        return(
            <div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-3'>
                        <img src={image} style={{width:"3.5rem"}} className='rounded-pill' alt='#'/>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-3'>
                        <div className='d-flex'>
                            <h4>{title}</h4>
                            <p className='ms-2'><VerifiedIcon/></p>
                        </div>
                        <p className='text-black-50' style={{marginTop:"-10px"}}>{social}</p>
                    </div>
                </div>
                <hr style={{marginTop:"-2px"}}/>
            </div>
        )
    }
  return (
    <div className='bg-white p-3 rounded'>
        <h4 className='py-2'>Suggested</h4>
        <SuggestedCard
            image="images/Passport13.PNG"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/Passport14.PNG"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/Passport15.PNG"
            title="Janis Joplin"
            social="@johndoe"
        /> 
        <SuggestedCard
            image="images/Passport13.PNG"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/Passport14.PNG"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/Passport15.PNG"
            title="Janis Joplin"
            social="@johndoe"
        /> 
        <SuggestedCard
            image="images/Passport13.PNG"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/Passport14.PNG"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/Passport15.PNG"
            title="Janis Joplin"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/Passport13.PNG"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/Passport14.PNG"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/Passport15.PNG"
            title="Janis Joplin"
            social="@johndoe"
        /> 
    </div>
  )
}

export default Suggested