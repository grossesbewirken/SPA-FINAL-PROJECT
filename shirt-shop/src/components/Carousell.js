// Packages Import
// import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

// Styles Import
import '../styles/carousel.scss';
import "../styles/App.scss"

// Files Import
import carousel_black1 from "../images/carousel_black1.png";
import carousel_black2 from "../images/carousel_black2.png";
import carousel_black3 from "../images/carousel_black3.png";
import carousel_beige1 from "../images/carousel_beige1.png";
import carousel_beige2 from "../images/carousel_beige2.png";
import carousel_beige3 from "../images/carousel_beige3.png";
import carousel_blue1 from "../images/carousel_blue1.png";
import carousel_blue2 from "../images/carousel_blue2.png";
import carousel_blue3 from "../images/carousel_blue3.png";
import carousel_grey1 from "../images/carousel_grey1.png";
import carousel_grey2 from "../images/carousel_grey2.png";
import carousel_grey3 from "../images/carousel_grey3.png";
import carousel_lime1 from "../images/carousel_lime1.png";
import carousel_lime2 from "../images/carousel_lime2.png";
import carousel_lime3 from "../images/carousel_lime3.png";
import carousel_oliv1 from "../images/carousel_oliv1.png";
import carousel_oliv2 from "../images/carousel_oliv2.png";
import carousel_oliv3 from "../images/carousel_oliv3.png";
import carousel_orange1 from "../images/carousel_orange1.png";
import carousel_orange2 from "../images/carousel_orange2.png";
import carousel_orange3 from "../images/carousel_orange3.png";
import carousel_red1 from "../images/carousel_red1.png";
import carousel_red2 from "../images/carousel_red2.png";
import carousel_red3 from "../images/carousel_red3.png";

const carouselPicArr =
  [carousel_black1,
    carousel_black2,
    carousel_black3,
    carousel_beige1,
    carousel_beige2,
    carousel_beige3,
    carousel_blue1,
    carousel_blue2,
    carousel_blue3,
    carousel_grey1,
    carousel_grey2,
    carousel_grey3,
    carousel_lime1,
    carousel_lime2,
    carousel_lime3,
    carousel_oliv1,
    carousel_oliv2,
    carousel_oliv3,
    carousel_orange1,
    carousel_orange2,
    carousel_orange3,
    carousel_red1,
    carousel_red2,
    carousel_red3
  ]

const Carousell = ({showCarousel}) => {

  return (
    <div className='outer-container'>
      <Carousel className='carousel-inner-container'>
        {carouselPicArr.map((img, i) => {
          return (
            <Carousel.Item
              key={i}
              interval={1500} className="carousel-item-container">
                <img
                  className="d-block w-100"
                  src={img}
                  alt="First slide"
                />
            </Carousel.Item>
          )
        })}
      </Carousel>

      <button className="button-container-single nerdbutton" onClick={showCarousel}>
        return Shop;
      </button>

    </div>  
  );
};

export default Carousell;

// import Swiper from 'swiper';

// var swiper = new Swiper(".mySwiper", {

//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 1000, //2000ms = 2s;
//   autoplayHoverPause: true,

//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPreview: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 300,
//     modifier: 1,
//     slideShadows: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// })

{/* <section className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className='card swiper-slide'>
          <div className='card_image'>
            <img src={carouselPicArr[0]} alt="Test" />
          </div>
          <div className='card_content'>
            <span className='card_title'>Sherd</span>
            <span className='card_name'>Name</span>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores?</p>
            <button className='card_btn'>View More</button>
          </div>
        </div>
      </div>

      <div className="swiper-wrapper">
        <div className='card swiper-slide'>
          <div className='card_image'>
            <img src={carouselPicArr[1]} alt="Test" />
          </div>
          <div className='card_content'>
            <span className='card_title'>Sherd</span>
            <span className='card_name'>Name</span>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores?</p>
            <button className='card_btn'>View More</button>
          </div>
        </div>
      </div>
      
      <div className="swiper-wrapper">
        <div className='card swiper-slide'>
          <div className='card_image'>
            <img src={carouselPicArr[2]} alt="Test" />
          </div>
          <div className='card_content'>
            <span className='card_title'>Sherd</span>
            <span className='card_name'>Name</span>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores?</p>
            <button className='card_btn'>View More</button>
          </div>
        </div>
      </div>

      <div className="swiper-wrapper">
        <div className='card swiper-slide'>
          <div className='card_image'>
            <img src={carouselPicArr[3]} alt="Test" />
          </div>
          <div className='card_content'>
            <span className='card_title'>Sherd</span>
            <span className='card_name'>Name</span>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores?</p>
            <button className='card_btn'>View More</button>
          </div>
        </div>
      </div>

      <div className="swiper-wrapper">
        <div className='card swiper-slide'>
          <div className='card_image'>
            <img src={carouselPicArr[4]} alt="Test" />
          </div>
          <div className='card_content'>
            <span className='card_title'>Sherd</span>
            <span className='card_name'>Name</span>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores?</p>
            <button className='card_btn'>View More</button>
          </div>
        </div>
      </div>

      <div className="swiper-wrapper">
        <div className='card swiper-slide'>
          <div className='card_image'>
            <img src={carouselPicArr[5]} alt="Test" />
          </div>
          <div className='card_content'>
            <span className='card_title'>Sherd</span>
            <span className='card_name'>Name</span>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores?</p>
            <button className='card_btn'>View More</button>
          </div>
        </div>
      </div>
    </section> */}