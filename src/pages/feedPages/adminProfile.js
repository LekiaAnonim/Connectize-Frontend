import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Reviews from '../../components/admin/feeds/reviews';
import Summary from '../../components/admin/feeds/summary';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Instagram, Pencil } from '../../icon';
import {LinkedIn, Twitter } from '@mui/icons-material';
import Trends from '../../components/admin/analysis/trends';


export default function AdminProfile() {

    function ListedProduct(props) {
        let {post,followers,reviews} = props
        return (
          <div>
              <div>
                  <h2>Dangote oil refinary</h2>
                  <div className='my-4'>
                      <button className='rounded-pill py-1 px-2 me-1 border border-none'>{post}</button>
                      <button className='rounded-pill py-1 px-2 me-1 border border-none'>{followers}</button>
                      <button className='rounded-pill py-1 px-2 border border-none'>{reviews}</button>
                  </div>
              </div>
              
          </div>
        )
      }
      function About(props){
        let{icon,social,desc}=props
        return(
            <div className='d-flex gap-3'>
                <div>{icon}</div>
                <h6>{social}:</h6> 
                <p>{desc}</p>
            </div>
        )
      }
      let SuggestedCard=({image,title,achive,social})=>{
        return(
            <div className='bg-white p-3 rounded'>
                <div className='d-flex gap-3'>
                    <div className=''>
                        <img src={image} alt='#'/>
                    </div>
                    <div className=''>
                        <h6>{title}</h6>
                        <p className='text-black-50'>{achive}</p>
                    </div>
                    <div>
                        <button className='rounded-pill bg-black text-white px-2'>{social}</button>
                    </div>
                </div>
                <hr style={{marginTop:"-2px"}}/>
            </div>
        )
    }
  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div>
                <img src="images/Rectangle14.png" alt='#' className='w-100'/>
                <img src="images/dangotelogo.png" alt='#' style={{marginTop:"-20%",width:"70px", marginLeft:"10%"}}/>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <ListedProduct
                        post = '25k post'
                        followers = '1M followers'
                        reviews = '157 Reviews'
                    />
                    <div className='d-flex bg-white p-4 rounded'>
                        <h3>Listed products</h3>
                        <p className='ms-auto'><MoreHorizIcon/></p>
                    </div>
                    <div className='bg-white p-3 rounded'>
                        <h3>About <Pencil/></h3>
                        <About
                            icon={<FmdGoodRoundedIcon/>}
                            social="Location"
                            desc={`2972 Westheimer Rd. Santa Ana, Illinois 85486`}
                        />
                        <About
                            icon={<LanguageRoundedIcon/>}
                            social="Website"
                            desc="Dangoteoilplant.com"
                        />
                        <About
                            icon={<MailRoundedIcon/>}
                            social="Email"
                            desc="Company.email.com"
                        />
                        
                        <div className='d-flex gap-3'>
                            <AttachFileRoundedIcon/>
                            <h6>Links:</h6>
                            <p className='d-flex gap-2'>
                                <FacebookRoundedIcon/>
                                <Instagram/>
                                <LinkedIn/>
                                <Twitter/>
                            </p>
                        </div>
                    </div>
                    <Reviews/>
                </div>
                <div className='col-5'>
                    <div>
                        <Summary/>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='p-3'>
                    <Trends />
                    </div>
                    <div>
                        <SuggestedCard
                            image="images/passport7.png"
                            title="Wade Warren"
                            achive="12 mutuals"
                            social="connect"
                        />
                        <SuggestedCard
                            image="images/passport8.png"
                            title="Brooklyn Semmons"
                            achive="17 mutuals"
                            social="connect"
                        />
                        <SuggestedCard
                            image="images/passportimg.png"
                            title="Jenny Wilson"
                            achive="52 mutuals"
                            social="connect"
                        /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}