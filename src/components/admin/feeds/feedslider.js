import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Bookmark} from "../../../icon";
import { Rating } from "@mui/material";

function FeedSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let Slide=()=>{
    return(
      <>
        <div className="me-3 card-body card" style={{background:"#faf9f7"}}>
            <div className="d-flex">
                <h6>Remote Monitoring and<br/> Control</h6>
                <div className="ms-auto"><Bookmark /></div>
            </div>
            <div>
                <Rating className="text-warning"/>
            </div>
            <p>This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. </p>
            <div className="w-25 d-flex">
                <img src="images/passport9.PNG" className="w-50" alt="#" />
                <img src="images/passport10.PNG" className="w-50" style={{marginLeft:"-4px"}} alt="#" />
                <img src="images/passport11.PNG" className="w-50" style={{marginLeft:"-4px"}} alt="#" />
                <img src="images/passport12.PNG" className="w-50" style={{marginLeft:"-4px"}} alt="#" />
                <img src="images/passportimg1.PNG" className="w-50" style={{marginLeft:"-4px"}} alt="#" />
            </div>
            <hr/>
            <div className="d-flex">
                <div  className="w-25"><img src="images/iconbmw.PNG"  className="w-75" alt="bmw"/></div>
                <p className="mt-1">West Land Oil</p>
                <div><button className="rounded-pill border border-none py-1 px-3 ms-1" style={{background:"#FFC96F"}}>view</button></div>
            </div>
        </div>
        
      </>
    )
  }
  return (
    <div className="">
      <Slider {...settings}>
          <div>
            <Slide
            />
          </div>
          <div>
            <Slide
              />
          </div>
          <div>
            <Slide
              />
          </div>
          <div>
            <Slide
              />
          </div>
      </Slider>
    </div>
  );
}

export default FeedSlider;


