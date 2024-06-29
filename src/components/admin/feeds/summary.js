import MoreHorizoneIcon from '@mui/icons-material/MoreHoriz'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Summary() {
    function ProductCard({image,image1,text,icon,icon1,icon2,image2,image3,connect}){
        return(
          <>
            <div className='bg-white p-4' style={{marginTop:"-5%",borderRadius:"5%"}}>
               <h3>Recomended Products</h3>
                  <div className='d-flex py-3 px-2 rounded' style={{background:"#faf9f7"}}>
                    <img src={image}style={{width:"170%",height:"140%"}} alt='#' />
                    <div className='ms-2'>
                      <div className='d-flex'>
                        <img src={image1} className='my-2 me-2' style={{height:"30px"}} alt='#'/>
                        <p>{text}</p>
                        <p className='ms-5'>{icon}</p>
                      </div>
                      <hr style={{marginTop:"-2px"}}/>
                      <div className='d-flex'>
                        <div>
                          <img src={image3} alt='#'/>
                          <img src={image2} style={{marginLeft:"-5px"}} alt='#'/>
                        </div>
                        <div className='ms-auto d-flex'>
                          {icon1}
                          178k
                          <p className='ms-2'>{icon2}</p>
                        </div>
                      </div>
                      <button className='rounded-pill px-2 bg-black text-white mt-2'>{connect}</button> 
                    </div>
                  </div>
                  
              </div>
          </>
        )
      }
  return (
    <div>
        <div className='d-flex py-4'>
            <h2>Summary</h2>
            <MoreHorizoneIcon className='ms-auto h1'/>
        </div>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
        </p>
        <hr className='my-5'/>
        <div>
            <button className='bg-warning py-2 px-4 me-3 border border-none rounded-pill'>Activities</button>
            <button className='py-2 px-4 me-3 border border-none rounded-pill'>Services</button>
            <button className='py-2 px-4 me-3 border border-none rounded-pill'>Products</button>
            <button className='py-2 px-4 border border-none rounded-pill'>Reviews</button>
        </div>
        <h3 className='py-5'>Activities</h3>
        <div className='p-5 rounded mb-5'style={{boxShadow:"0px 7px 1px 0px #FFC96F"}}>
            <h4>What is happening</h4>
            <hr />
            <div className='d-flex gap-2'>
                <button className='text-success py-2 px-3 border border-none'><InsertPhotoOutlinedIcon/></button>
                <button className='py-2 px-3 border border-none rounded'><GifBoxOutlinedIcon className='text-warning'/></button>
                <button className='py-2 px-3 border border-none rounded'><ArticleOutlinedIcon className='text-primary'/></button>
                <button className='py-2 px-3 border border-none rounded'><InsertEmoticonIcon className='text-warning'/></button>
                <button className='py-1 px-3 border border-none rounded-pill ms-auto bg-warning'>create post</button>
            </div>
        </div>
        <div>
            
        <ProductCard
                        image = "images/Rectangle11.png"
                        image1 = "images/Ellipse1.png"
                        text = "Lorem ipsum dolor sit"
                        icon = {<MoreHorizoneIcon/>}
                        icon1 ={<FavoriteIcon/>}
                        icon2={<ShareIcon/>}
                        image2 = "images/passport5.png"
                        image3 = "images/passport6.png"
                        connect ="connect"
                    />
        </div>
        <div className='mt-5'>
            
        <ProductCard
                        image = "images/Rectangle11.png"
                        image1 = "images/Ellipse1.png"
                        text = "Lorem ipsum dolor sit"
                        icon = {<MoreHorizoneIcon/>}
                        icon1 ={<FavoriteIcon/>}
                        icon2={<ShareIcon/>}
                        image2 = "images/passport5.png"
                        image3 = "images/passport6.png"
                        connect ="connect"
                    />
        </div>
    </div>
  )
}

export default Summary