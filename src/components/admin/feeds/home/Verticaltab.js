import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PanoramaIcon from '@mui/icons-material/Panorama';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from "react-router-dom";
// import SvgIcon from '@mui/material/SvgIcon';


export default function VerticalTab() {
    
    return(
        <div  className="vertical-tab-container">
            
            <Link to={"/feedPages"} className="side-icon left-side-bar-active-button" variant="contained" startIcon={<HomeIcon />}>Feeds</Link>
            <Button className="side-icon" variant="contained" startIcon={<HomeIcon />}>Market</Button>
            <Button className="side-icon" variant="contained" startIcon={<ForumIcon />}>Organization</Button>
            <Link to={"/market"} className="side-icon" variant="contained" startIcon={<LocalGroceryStoreIcon />}>Services</Link>
            <Button className="side-icon" variant="contained" startIcon={<SignalCellularAltIcon />}>Analyis</Button>
            <Button className="side-icon" variant="contained" startIcon={<PanoramaIcon />}>Chats</Button>
            <Button className="side-icon" variant="contained" startIcon={<PlayCircleFilledIcon />}>Contacts</Button>
        </div>
    )
}