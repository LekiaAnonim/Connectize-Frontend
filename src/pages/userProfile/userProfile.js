import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductCard from '../../components/admin/userProfile/listedProduct';
import ProductCardTwo from '../../components/admin/userProfile/listedProductTwo';
import ProductCardThree from '../../components/admin/userProfile/listedProductThree';
import Reviews from '../../components/admin/userProfile/reviews';
import Summary from '../../components/admin/userProfile/summary';
import Suggested from '../../components/admin/userProfile/suggested';


export default function UserProfile() {

    function ListedProduct({post,followers,reviews}) {
  
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

  return (
    <div style={{background:"#faf9f7"}} >
        <div className='container'>
            <Navigationbar/>
            <div>
                <img src="images/dangote.png" alt='#' className='w-100'/>
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
                    <ProductCard
                        image = "images/rectangle11.png"
                        image1 = "images/Ellipse1.png"
                        text = "Lorem ipsum dolor sit"
                        icon = {<MoreHorizIcon/>}
                        icon1 ={<FavoriteIcon/>}
                        icon2={<ShareIcon/>}
                        image2 = "images/passport5.png"
                        image3 = "images/passport6.png"
                        connect ="connect"
                    />
                    <ProductCardTwo
                        image = "images/rectangle12.png"
                        image1 = "images/Ellipse2.png"
                        text = "Lorem ipsum dolor sit"
                        icon = {<MoreHorizIcon/>}
                        icon1 ={<FavoriteIcon/>}
                        icon2={<ShareIcon/>}
                        image2 = "images/passport5.png"
                        image3 = "images/passport6.png"
                        image4 = "images/passportimg.png"
                        image5 = "images/passport6.png"
                        connect ="connect"
                    />
                    <ProductCardThree
                        image = "images/rectangle13.png"
                        image1 = "images/Ellipse3.png"
                        text = "Lorem ipsum dolor sit"
                        icon = {<MoreHorizIcon/>}
                        icon1 ={<FavoriteIcon/>}
                        icon2={<ShareIcon/>}
                        image2 = "images/passport5.png"
                        image3 = "images/passport6.png"
                        image4 = "images/passportimg.png"
                        connect ="connect"
                    />
                    <Reviews/>
                </div>
                <div className='col-5'>
                    <div>
                        <Summary/>
                    </div>
                </div>
                <div className='col-3'>
                    <div>
                        <Suggested/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
