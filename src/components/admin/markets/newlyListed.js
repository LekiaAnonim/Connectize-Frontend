import React from 'react'
import { GreaterThan } from '../../../icon'

function NewlyListed() {
    let ListCard=({image,gold,reserve,chat}) =>{
        return (
          <div>
              <img src={image} className='w-100' alt='#'/>
              <p>{gold}<br/> {reserve}</p>
              <button className='bg-dark text-white rounded-pill px-1'>{chat}</button>
          </div>
        )
      }
  return (
    <div className='pb-5'>
        <div className='d-flex mt-5'>
            <h3>newlyListed</h3>
            <p className='ms-auto'>See All <GreaterThan/></p>
        </div>
        <div className='row'>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle2.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle4.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle5.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle6.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
        </div>

        <div className='row'>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle7.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle8.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle9.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
            <div className='col-sm-6 col-md-3 mb-3'>
                <ListCard 
                    image="images/Rectangle10.png"
                    gold="Premium Black Gold"
                    reserve="Reserve"
                    chat="Chat seller"
                />
            </div>
        </div>
    </div>
  )
}

export default NewlyListed