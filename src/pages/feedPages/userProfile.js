import React from 'react'
import Navigationbar from '../../components/admin/services/navbar'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductCard from '../../components/admin/feeds/listedProduct';
import Reviews from '../../components/admin/feeds/reviews';
import Summary from '../../components/admin/feeds/summary';
import Suggested from '../../components/admin/feeds/suggested';
import Company from '../../components/admin/feeds/company';


export default function UserProfile() {

  function ListedProduct({ post, followers, reviews }) {

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

  const ImageOne = () => {
    return (
      <>
        <div>
          <img src='images/passport5.png' className='w-25' alt='#' />
          <img src='images/passport6.png' className='w-25' style={{ marginLeft: "-5px" }} alt='#' />
        </div>
      </>
    )
  }
  const ImageTwo = () => {
    return (
      <>
        <div>
          <img src='images/passport5.png' className='w-25' alt='#' />
          <img src='images/passport6.png' className='w-25' style={{ marginLeft: "-5px" }} alt='#' />
          <img src='images/passportimg.png' className='w-25' style={{ marginLeft: "-5px" }} alt='#' />
          <img src='images/passport6.png' className='w-25' style={{ marginLeft: "-5px" }} alt='#' />
        </div>
      </>
    )
  }
  const ImageThree = () => {
    return (
      <>
        <div>
          <img src='images/passport5.png' className='w-25' alt='#' />
          <img src='images/passport6.png' className='w-25' style={{ marginLeft: "-5px" }} alt='#' />
          <img src='images/passportimg.png' className='w-25' style={{ marginLeft: "-5px" }} alt='#' />
        </div>
      </>
    )
  }
  return (
    <div style={{ background: "#faf9f7" }} >
      {/* <div className='mx-5'> */}
      <Navigationbar />
      <div className='row'>
        <div className='col-12'>
          <img src="images/dangote.png" alt='#' className='w-100' />
          <img src="images/dangotelogo.png" alt='#' style={{ marginTop: "-10%", width: "70px", marginLeft: "10%" }} />
        </div>
      </div>
      <div className='mx-5 mt-32'>
        <div className='row'>
          <div className='col-sm-5 col-md-5 col-lg-4'>
            <ListedProduct
              post='25k post'
              followers='1M followers'
              reviews='157 Reviews'
            />
            <div className='d-flex bg-white p-4 rounded'>
              <h3>Listed products</h3>
              <p className='ms-auto'><MoreHorizIcon /></p>
            </div>
            <ProductCard
              image="images/drum1.PNG"
              image1="images/ellipse4.PNG"
              text="Lorem ipsum dolor sit"
              icon={<MoreHorizIcon />}
              icon1={<FavoriteIcon />}
              icon2={<ShareIcon />}
              gallery={<ImageOne />}
              connect="connect"
            />
            <ProductCard
              image="images/drum2.PNG"
              image1="images/ellipse5.PNG"
              text="Lorem ipsum dolor sit"
              icon={<MoreHorizIcon />}
              icon1={<FavoriteIcon />}
              icon2={<ShareIcon />}
              gallery={<ImageTwo />}
              connect="connect"
            />
            <ProductCard
              image="images/drum3.PNG"
              image1="images/ellipse6.PNG"
              text="Lorem ipsum dolor sit"
              icon={<MoreHorizIcon />}
              icon1={<FavoriteIcon />}
              icon2={<ShareIcon />}
              gallery={<ImageThree />}
              connect="connect"
            />
            <Reviews />
          </div>
          <div className='col-sm-7 col-md-7 col-lg-5'>
            <div>
              <Summary />
              <Company />
            </div>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-3'>
            <div>
              <Suggested />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
