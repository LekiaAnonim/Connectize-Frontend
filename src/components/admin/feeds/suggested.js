import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

function Suggested() {
    let SuggestedCard=({image,title,social})=>{
        return(
            <div>
                <div className='d-flex'>
                    <div className='px-3'>
                        <img src={image} alt='#'/>
                    </div>
                    <div>
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
            image="images/ProfilePic1.png"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/ProfilePic3.png"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/ProfilePic2.png"
            title="Janis Joplin"
            social="@johndoe"
        /> 
        <SuggestedCard
            image="images/ProfilePic1.png"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/ProfilePic3.png"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/ProfilePic2.png"
            title="Janis Joplin"
            social="@johndoe"
        /> 
        <SuggestedCard
            image="images/ProfilePic1.png"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/ProfilePic3.png"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/ProfilePic2.png"
            title="Janis Joplin"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/ProfilePic1.png"
            title="McFly"
            social="@levraimcfly"
        />
        <SuggestedCard
            image="images/ProfilePic3.png"
            title="JohnDoe"
            social="@johndoe"
        />
        <SuggestedCard
            image="images/ProfilePic2.png"
            title="Janis Joplin"
            social="@johndoe"
        /> 
    </div>
  )
}

export default Suggested