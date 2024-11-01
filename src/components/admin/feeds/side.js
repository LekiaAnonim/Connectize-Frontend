import { useState } from 'react';
//import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FeedSideBar from './feedSideBar';
import { Check, List } from '@mui/icons-material';
import {Nav,NavItem} from "@asphalt-react/sidebar";

function SidebarLinear() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" className="d-lg-none d-md-none" onClick={handleShow}>
        <List/>
      </Button>

      <div variant="" className="d-none d-lg-block">
        <FeedSideBar/>
      </div>
        <Offcanvas show={show} onHide={handleClose} responsive="md lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>James Ogbonna</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <div className='rounded' style={{background:"#2F3645",color:"#ffffff"}}> */}
          <div className='ps-3' style={{background:"#fff",color:"#"}}>
            <Nav>
            <NavItem >
                <img src='images/Jamespicsnobg.png' className='w-50 rounded-pill ms-4 mt-4 bg-primary' alt='profile'/>
            </NavItem>
            <NavItem>
                <h4 style={{color:'orangered'}}>Ogbonna James</h4>
            </NavItem>
            <NavItem>
                <p>Fullstack Developer</p>
            </NavItem>
            <NavItem>
              <hr/>
             {/* <div className='d-flex bg-success p-2 text-white bg-opacity-50'> */}
             <div className='row'>
                <h6 className='col-md-4'>Location:</h6>
                <p className='col-md-6'>Lagos, Nigeria</p>
             </div>
             <hr/>
            </NavItem>
            <NavItem>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>HTML, CSS</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Bootstrap, Tailwind</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Material UI, React Bootstrap,</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Slick, AOS</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Reactjs, Nextjs</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>JavaScript, Nodejs, Expressjs</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>C#,.NET 6.0, .NET Core MVC, EFcore</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Swagger, Postman, Tunder client</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Sql, Msql, Mongoo, MSsql</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>REST API</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>vercel, netlify, Version control(Git)</p>
                </div>
            </NavItem>
          </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SidebarLinear;













// import Home from '@mui/icons-material/Home'
// import { Link } from 'react-router-dom'
// import { Building, Usergroup } from '../../../icon'
// import { AccountCircle, Analytics, ChatRounded, ContactPage, DesignServices,List} from '@mui/icons-material'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import FeedSideBar from './feedSideBar';

// function SidebarLinear() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//     let Feed=(props)=>{
//         let {icon,link,text,bg,textColor}=props
//         return(
//             <div className='d-flex gap-2 p-2 rounded' style={bg}>
//                 <div className={textColor}>{icon}</div>
//                 <Link to={link} className={textColor}>{text}</Link>
//             </div>
//         )
//     }
//     let Company=(props)=>{
//         let {img,name}=props
//         return(
//             <div>
//                 <div className='d-flex gap-1'>
//                     <img src={img} alt='dell' style={{height:"50px"}}/>
//                     <div>
//                         <h6>{name}</h6>
//                         <p style={{marginTop:"-5px"}}>Sed ut perspiciatis unde omnis iste natus</p>
//                     </div>
//                 </div>
//                 <hr style={{marginTop:"-10px"}}/>
//             </div>
//         )
//     }
//   return (
//     <div className="sticky-top p-2">
//       <Button variant="" className="d-lg-none" onClick={handleShow}>
//         <List/>
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} responsive="lg">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Connectize</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//             <div className='bg-white rounded p-3'>
//                 <div>
//                     <Link to={'/adminprofile'}> 
//                         <img src='images/logo.png' className='d-flex mx-auto' alt='logo'/>
//                     </Link>
//                 </div>
//                 <div style={{background:"#faf9f7"}} className='p-4 rounded'>
//                     <div>
//                         <Feed
//                             icon ={<Home/>}
//                             link = {'/'}
//                             text ="Feeds"
//                             textColor={'text-warning text-decoration-none'}
//                             bg={{background:"black"}}
//                         />
//                     </div>
//                     <div>
//                         <Feed
//                             icon ={<Building/>}
//                             link = {'/market'}
//                             text ="Market"
//                             textColor={'text-black text-decoration-none'}
//                         />
//                     </div>
//                     <div>
//                         <Feed
//                             icon ={<Usergroup/>}
//                             link = {'/organization'}
//                             text ="Organization"
//                             textColor={'text-black text-decoration-none'}
//                         />
                        
//                     </div>
//                     <div>
//                         <Feed
//                             icon ={<DesignServices/>}
//                             link = {'/service'}
//                             text ="Services"
//                             textColor={'text-black text-decoration-none'}
//                         />
//                     </div>
//                     <div>
//                         <Feed
//                             icon ={<Analytics/>}
//                             link = {'/analysis'}
//                             text ="Analysis"
//                             textColor={'text-black text-decoration-none'}
//                         />
//                     </div>
//                     <div>
//                         <Feed
//                             icon ={<ChatRounded/>}
//                             link = {'/chat'}
//                             text ="Chat"
//                             textColor={'text-black text-decoration-none'}
//                         />
//                     </div>
//                     <div>
//                         <Feed
//                             icon ={<ContactPage/>}
//                             link = {'/contact'}
//                             text ="Contact"
//                             textColor={'text-black text-decoration-none'}
//                         />
//                     </div>
//                     <div>
//                         <Feed
//                             icon ={<AccountCircle/>}
//                             link = {'/signup'}
//                             text ="Profile"
//                             textColor={'text-black text-decoration-none'}
//                         />
//                     </div>
//                 </div>
//                 <h4 className='py-3'>Companies</h4>
//                 <div>
//                     <Company
//                         img="images/icondell.PNG"
//                         name='Jenny Wilson'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/iconhuawei.PNG"
//                         name='Albert Flores'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/iconcooper.PNG"
//                         name='Basie Cooper'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/icondalene.PNG"
//                         name='Darlene Robertson'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/iconnorth.PNG"
//                         name='Esther Howard'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/iconnasa.PNG"
//                         name='Annette Black'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/icondell.PNG"
//                         name='Jenny Wilson'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/iconcody.PNG"
//                         name='Cody Fisher'
//                     />
//                 </div>
//                 <div>
//                     <Company
//                         img="images/iconnasa.PNG"
//                         name='Annette Black'
//                     />
//                 </div>
//                 <h6 className='text-center'>show more</h6>
//             </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
//   );
// }

// export default SidebarLinear;
