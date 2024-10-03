import Home from '@mui/icons-material/Home'
import React from 'react'
import { Link } from 'react-router-dom'
import { Building, Usergroup } from '../../../icon'
import { AccountCircle, Analytics, ChatRounded, ContactPage, DesignServices} from '@mui/icons-material'


export default function FeedSideBar() {
    let Feed=(props)=>{
        let {icon,link,text,bg,textColor}=props
        return(
            <div className='d-flex gap-2 p-2 rounded' style={bg}>
                <div className={textColor}>{icon}</div>
                <Link to={link} className={textColor}>{text}</Link>
            </div>
        )
    }
    let Company=(props)=>{
        let {img,name}=props
        return(
            <div>
                <div className='d-flex gap-1'>
                    <img src={img} alt='dell' style={{height:"50px"}}/>
                    <div>
                        <h6>{name}</h6>
                        <p style={{marginTop:"-5px"}}>Sed ut perspiciatis unde omnis iste natus</p>
                    </div>
                </div>
                <hr style={{marginTop:"-10px"}}/>
            </div>
        )
    }
  return (
    <div>
        <div className='bg-white rounded p-3'>
            <div>
                <Link to={'/adminprofile'}> 
                    <img src='images/logo.png' className='d-flex mx-auto' alt='logo'/>
                </Link>
            </div>
            <div style={{background:"#faf9f7"}} className='p-4 rounded'>
                <div>
                    <Feed
                        icon ={<Home/>}
                        link = {'/'}
                        text ="Feeds"
                        textColor={'text-warning text-decoration-none'}
                        bg={{background:"black"}}
                    />
                </div>
                <div>
                    <Feed
                        icon ={<Building/>}
                        link = {'/market'}
                        text ="Market"
                        textColor={'text-black text-decoration-none'}
                    />
                </div>
                <div>
                    <Feed
                        icon ={<Usergroup/>}
                        link = {'/organization'}
                        text ="Organization"
                        textColor={'text-black text-decoration-none'}
                    />
                    
                </div>
                <div>
                    <Feed
                        icon ={<DesignServices/>}
                        link = {'/service'}
                        text ="Services"
                        textColor={'text-black text-decoration-none'}
                    />
                </div>
                <div>
                    <Feed
                        icon ={<Analytics/>}
                        link = {'/analysis'}
                        text ="Analysis"
                        textColor={'text-black text-decoration-none'}
                    />
                </div>
                <div>
                    <Feed
                        icon ={<ChatRounded/>}
                        link = {'/chat'}
                        text ="Chat"
                        textColor={'text-black text-decoration-none'}
                    />
                </div>
                <div>
                    <Feed
                        icon ={<ContactPage/>}
                        link = {'/contact'}
                        text ="Contact"
                        textColor={'text-black text-decoration-none'}
                    />
                </div>
                <div>
                    <Feed
                        icon ={<AccountCircle/>}
                        link = {'/signup'}
                        text ="Profile"
                        textColor={'text-black text-decoration-none'}
                    />
                </div>
            </div>
            <h4 className='py-3'>Companies</h4>
            <div>
                <Company
                    img="images/icondell.PNG"
                    name='Jenny Wilson'
                />
            </div>
            <div>
                <Company
                    img="images/iconhuawei.PNG"
                    name='Albert Flores'
                />
            </div>
            <div>
                <Company
                    img="images/iconcooper.PNG"
                    name='Basie Cooper'
                />
            </div>
            <div>
                <Company
                    img="images/icondalene.PNG"
                    name='Darlene Robertson'
                />
            </div>
            <div>
                <Company
                    img="images/iconnorth.PNG"
                    name='Esther Howard'
                />
            </div>
            <div>
                <Company
                    img="images/iconnasa.PNG"
                    name='Annette Black'
                />
            </div>
            <div>
                <Company
                    img="images/icondell.PNG"
                    name='Jenny Wilson'
                />
            </div>
            <div>
                <Company
                    img="images/iconcody.PNG"
                    name='Cody Fisher'
                />
            </div>
            <div>
                <Company
                    img="images/iconnasa.PNG"
                    name='Annette Black'
                />
            </div>
            <h6 className='text-center'>show more</h6>
        </div>
    </div>
  )
}
