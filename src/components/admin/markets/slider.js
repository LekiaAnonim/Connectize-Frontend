import { Link } from "react-router-dom";
import Slider from "react-slick";
import { GreaterThan } from "../../../icon";
function PauseOnHover() {
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
  let Card=(props)=>{
    let {img} =props
    return(
      <div>
        <div className="card px-1 mx-2 pb-4">
            <img src={img} className="card-body w-100" style={{height:"300px"}} alt="#"/>
            <div className="d-flex card-body text-white" style={{marginTop:"-6rem"}}>
              <h3 className="bg-secondary rounded" style={{opacity:"80%"}}>Efficiency Unlished:<br/>Mid-Tier Blend</h3>
              <Link to={"/product"} style={{height:"40px"}} className="btn btn-dark text-white rounded-pill ms-auto">Visit store <GreaterThan/></Link>
            </div>
          </div>
      </div>
    )
  }
  return (
    <div className="container p-2">
      <Slider {...settings}>
        <div>
          <Card
            img="images/Rectangle1.png"
          />
        </div>
        <div>
        <Card
            img="images/Rectangle2.png"
          />
        </div>
        <div>
        <Card
            img="images/Rectangle3.png"
          />
        </div>
        <div>
        <Card
            img="images/Rectangle4.png"
          />
        </div>
        <div>
        <Card
            img="images/Rectangle5.png"
          />
        </div>
        <div>
        <Card
            img="images/Rectangle6.png"
          />
        </div>
        <div>
        <Card
            img="images/Rectangle7.png"
          />
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;