import React from 'react'
import { Bookmark } from '../../../icon'
import ServiceCard from './serviceCard'


function ServiceMain() {
  return (
    <div>
        <div className='bg-white p-3 rounded shadow'>
            <button className='rounded-pill bg-warning py-2 px-4 border border-none mb-3'>Featured</button>
            <button className='rounded-pill py-2 px-4 bg-white mx-5 border border-none'>Most Recent</button>
            <button className='rounded-pill p-2 px-4 bg-white border border-none'>Best Matches</button>
        </div>
        <div className='bg-white p-3 my-4'>
            <div className='row '>
                <div className='col-sm-12 col-md-6 mb-4'>    
                    <ServiceCard 
                        bg={{background:"#f0d77f"}}
                        remote="Remote Monitoring and"
                        control="Control"
                        bookmark={<Bookmark/>}
                        tweet="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."
                        image="images/bmwprofilepicture.png"
                        westland="West Land Oil"
                        view="View"
                    />
                    
                </div>
                <div className='col-sm-12 col-md-6'>
                    <ServiceCard
                        bg={{background:"#faf9f7"}}
                        remote="Remote Monitoring and"
                        control="Control"
                        bookmark={<Bookmark/>}
                        tweet="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."
                        image="images/bmwprofilepicture.png"
                        westland="West Land Oil"
                        view="View"
                    />
                </div>
            </div>
            <div className='row my-4'>
                <div className='col-sm-12 col-md-6 mb-4'>
                    <ServiceCard 
                        bg={{background:"#faf9f7"}}
                        remote="Remote Monitoring and"
                        control="Control"
                        bookmark={<Bookmark/>}
                        tweet="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."
                        image="images/bmwprofilepicture.png"
                        westland="West Land Oil"
                        view="View"
                    />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <ServiceCard 
                        bg={{background:"#faf9f7"}}
                        remote="Remote Monitoring and"
                        control="Control"
                        bookmark={<Bookmark/>}
                        tweet="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."
                        image="images/bmwprofilepicture.png"
                        westland="West Land Oil"
                        view="View"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-6 mb-4'>
                    <ServiceCard 
                        bg={{background:"#faf9f7"}}
                        remote="Remote Monitoring and"
                        control="Control"
                        bookmark={<Bookmark/>}
                        tweet="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."
                        image="images/bmwprofilepicture.png"
                        westland="West Land Oil"
                        view="View"
                    />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <ServiceCard 
                        bg={{background:"#faf9f7"}}
                        remote="Remote Monitoring and"
                        control="Control"
                        bookmark={<Bookmark/>}
                        tweet="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."
                        image="images/bmwprofilepicture.png"
                        westland="West Land Oil"
                        view="View"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceMain