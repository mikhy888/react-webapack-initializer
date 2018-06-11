import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slider from "react-slick";
import styles from '../assets/scss/slick.scss';



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="home_page_slider">
        <div>
          <img src={"http://via.placeholder.com/1220x450"} />
        </div>
        <div>
          <img src={"http://via.placeholder.com/1220x450"} />
        </div>
        <div>
          <img src={"http://via.placeholder.com/1220x450"} />
        </div>
      </Slider>
    );
  }
}


export default SimpleSlider;