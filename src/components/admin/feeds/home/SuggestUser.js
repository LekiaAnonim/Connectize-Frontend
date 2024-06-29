import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';

export default function SuggestedUserCard() {
    
    return(
        <div className="suggested-user-card">
            <div className="company-list-container"> 
                <div className="company-list-card">
                    <img src="/logo192.png"  alt="Alan L. Hart" />
                    <div className="card-text">
                        <div className="name-verify">
                            <h5> Jenny Wilson </h5>
                            <VerifiedIcon />
                        </div> 
                        <p> @johndoe </p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}