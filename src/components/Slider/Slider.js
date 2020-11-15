import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import SliderButton from "./SliderButton";
import Slide_01 from "../../assets/images/slide_01_1042_728.jpg";
import Slide_02 from "../../assets/images/slide_02_1042_728.jpg";
import Slide_03 from "../../assets/images/slide_03_1042_728.jpg";
import Slide_04 from "../../assets/images/slide_04_1042_728.jpg";

class MainSlider extends React.Component {
  render() {
    const settings = {
      // autoplay: true,
      dots: true,
      arrows: true,
      // adaptiveHeight: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SliderButton to="prev" className="slick-prev" />,
      nextArrow: <SliderButton to="next" className="slick-next" />,
    };

    return (
      <Slider {...settings}>
        <div>
          <img src={Slide_01} alt="Slide_01" />
        </div>
        <div>
          <img src={Slide_02} alt="Slide_02" />
        </div>
        <div>
          <img src={Slide_03} alt="Slide_03" />
        </div>
        <div>
          <img src={Slide_04} alt="Slide_04" />
        </div>
      </Slider>
    );
  }
}

export default MainSlider;
