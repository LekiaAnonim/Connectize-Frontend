import React from "react";
import { Leftsidebar } from "./Leftsidebar";
import PrimarySearchAppBar from "./Header";
import { Rightsidebar } from "./Rightsidebar";
import MainContainer from "./MainContainer";
import './index.css';

export default function FeedPage() {
    return(
        <div className="page-container feed-page-container">
            <Leftsidebar />
            <div>
            <PrimarySearchAppBar />
            <MainContainer />
            </div>
            <Rightsidebar />
        </div>
        
    )
}