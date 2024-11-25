import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Card } from "./carousel";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };


  return (
    <div className="container p-2">
      <Slider {...settings}>
        <div>
          <Card img="/images/Rectangle1.png" />
        </div>
        <div>
          <Card img="/images/Rectangle2.png" />
        </div>
        <div>
          <Card img="/images/Rectangle3.png" />
        </div>
        <div>
          <Card img="/images/Rectangle4.png" />
        </div>
        <div>
          <Card img="/images/Rectangle5.png" />
        </div>
        <div>
          <Card img="/images/Rectangle6.png" />
        </div>
        <div>
          <Card img="/images/Rectangle7.png" />
        </div>
      </Slider>
    </div>
  );
}



export default PauseOnHover;
