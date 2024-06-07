import React from 'react'

export default function NewProducts() {
    let ProductCard = ({image,gold,reserved})=>{
        return(
            <div>
                <img src={image} className='w-100' alt='#'/>
                <p>{gold} <br/> {reserved}</p>
            </div>
        )
    }
  return (
    <div className='py-5'>
        <h3>You may also like</h3>
        <div className='row'>
            <div className='col-sm-6 col-md-3'>
                <ProductCard
                    image="images/Rectangle6.png"
                    gold="Premium Black Gold"
                    reserved="Reserve"
                />
            </div>
            <div className='col-sm-6 col-md-3'>
                <ProductCard
                    image="images/Rectangle6.png"
                    gold="Premium Black Gold"
                    reserved="Reserve"
                />
            </div>
            <div className='col-sm-6 col-md-3'>
                <ProductCard
                    image="images/Rectangle6.png"
                    gold="Premium Black Gold"
                    reserved="Reserve"
                />
            </div>
            <div className='col-sm-6 col-md-3'>
                <ProductCard
                    image="images/Rectangle6.png"
                    gold="Premium Black Gold"
                    reserved="Reserve"
                />
            </div>
        </div>
    </div>
  )
}
