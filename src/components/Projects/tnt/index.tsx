import React from "react";
import "./tnt.scss";
//import AliceCarousel from 'react-alice-carousel';
//import "react-alice-carousel/lib/alice-carousel.css";
//local
// import image1 from "/images/1.jpg";
// import image2 from "/images/2.jpg";
// import image3 from "/images/3.jpg";
// import image4 from "/images/4.jpg";
// import image5 from "/images/5.jpg";
// import image7 from "/images/7.jpg";
// import image8 from "/images/8.jpg";
// import image9 from "/images/9.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Tnt() {
  return (
    <div>
      <Carousel>
        <div>
          <img src={"images/1.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/2.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/3.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/4.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/5.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/7.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/8.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/9.jpg"} className="sliderimg" alt="" />
        </div>
        <div>
          <img src={"images/10.jpg"} className="sliderimg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
