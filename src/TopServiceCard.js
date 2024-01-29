import React from "react";
import IconButton from '@mui/material/IconButton';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';

export default function TopServiceCard() {
    const [value, setValue] = React.useState(2);
    return(
        <div className="top-service-card">
            <h3>Top Services</h3>
            <div className="top-service-inner-card">
                <div className="service-title">
                    <h4>Remote Monitoring and Control</h4>
                    <IconButton className="bookmark" aria-label="bookmark">
                        <TurnedInNotIcon />
                    </IconButton>
                </div>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <p className="about-service">This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too.</p>
                <AvatarGroup max={5}>
                    <Avatar className='avatar' alt="Remy Sharp" src="/images/OIG4.jpeg" />
                    <Avatar className='avatar' alt="Travis Howard" src="/images/woman_singing_ghs.jpg" />
                    <Avatar className='avatar' alt="Remy Sharp" src="/images/OIG4.jpeg" />
                    <Avatar className='avatar' alt="Travis Howard" src="/images/woman_singing_ghs.jpg" />
                    <Avatar className='avatar' alt="Remy Sharp" src="/images/OIG4.jpeg" />
                    <Avatar className='avatar' alt="Travis Howard" src="/images/woman_singing_ghs.jpg" />
                    <Avatar className='avatar' alt="Remy Sharp" src="/images/OIG4.jpeg" />
                    <Avatar className='avatar' alt="Travis Howard" src="/images/woman_singing_ghs.jpg" />
                </AvatarGroup>
                <div className="company-logo-name-view">
                    <div className="company-logo-name">
                        <img src="/images/woman_singing_ghs.jpg" alt="company" />
                        <span>west land oil</span>
                    </div>
                    <Button className="btn-primary" variant="contained">View</Button>
                </div>
            </div>
        </div>
    )
}