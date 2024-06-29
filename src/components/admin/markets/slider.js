import Slider from "react-slick";
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
  return (
    <div className="container p-2">
      <Slider {...settings}>
        <div>
          <div className="card px-1 mx-2">
            <img src="images/Rectangle1.png" className="card-body w-100" style={{height:"250px"}} alt="#"/>
            <div className="card-body">
              <h3>Sweet Cookie</h3>
              <p>Enjoy the yommy taste of our ever fresh cookie</p>
            </div>
          </div>
        </div>
        <div className="card px-1 mx-2">
          <img src="images/Rectangle2.png" className="card-body w-100" style={{height:"250px"}} alt="#"/>
          <h3>Onion Cookie</h3>
          <p>Enjoy the yommy taste of our ever fresh cookie</p>
        </div>
        <div className="card px-1 mx-2">
          <img src="images/Rectangle3.png" className="card-body w-100" style={{height:"250px"}} alt="#"/>
          <h3>Pinapple Cookie</h3>
          <p>Enjoy the yommy taste of our ever fresh cookie</p>
        </div>
        <div className="card px-1 mx-2">
          <img src="images/Rectangle4.png" className="card-body w-100" style={{height:"250px"}} alt="#"/>
          <h3>Berry Cookie</h3>
          <p>Enjoy the yommy taste of our ever fresh cookie</p>
        </div>
        <div className="card px-1 mx-2">
          <img src="images/Rectangle5.png" className="card-body w-100" style={{height:"250px"}} alt="#"/>
          <h3>Pumpkin Cookie</h3>
          <p>Enjoy the yommy taste of our ever fresh cookie</p>
        </div>
        <div className="card px-1 mx-2">
          <img src="images/Rectangle6.png" className="card-body w-100" style={{height:"250px"}} alt="#"/>
          <h3>Cherry Cookie</h3>
          <p>Enjoy the yommy taste of our ever fresh cookie</p>
        </div>
        <div className="card px-2 mx-2">
          <img src="images/Rectangle7.png" className="card-body w-100 rounded" style={{height:"250px"}} alt="#"/>
          <h3>Tomatos Cookie</h3>
          <p>Enjoy the yommy taste of our ever fresh cookie</p>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;