import React from "react";
import { Leftsidebar } from "../../components/admin/feeds/home/Leftsidebar";
import PrimarySearchAppBar from "../../components/admin/feeds/home/Header";
import { Rightsidebar } from "../../components/admin/feeds/home/Rightsidebar";
import MainContainer from "../../components/admin/feeds/home/MainContainer";
import '../../index.css';

export default function FeedPage() {
    return(
        <div className="page-container feed-page-container mt-0" 
        style={{background:"#faf9f7"}}>
            <Leftsidebar />
            <div>
            <PrimarySearchAppBar/>
            <MainContainer/>
            </div>
            <Rightsidebar />
        </div>
        
    )
}