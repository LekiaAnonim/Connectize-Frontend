import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PanoramaIcon from '@mui/icons-material/Panorama';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
// import SvgIcon from '@mui/material/SvgIcon';


export default function VerticalTab() {
    
    return(
        <div  className="vertical-tab-container">
            
            <Button className="side-icon left-side-bar-active-button" variant="contained" startIcon={<HomeIcon />}>Feeds</Button>
            <Button className="side-icon" variant="contained" startIcon={<HomeIcon />}>Messages</Button>
            <Button className="side-icon" variant="contained" startIcon={<ForumIcon />}>Organization</Button>
            <Button className="side-icon" variant="contained" startIcon={<LocalGroceryStoreIcon />}>Market</Button>
            <Button className="side-icon" variant="contained" startIcon={<SignalCellularAltIcon />}>Analyis</Button>
            <Button className="side-icon" variant="contained" startIcon={<PanoramaIcon />}>Photos</Button>
            <Button className="side-icon" variant="contained" startIcon={<PlayCircleFilledIcon />}>Videos</Button>
        </div>
    )
}