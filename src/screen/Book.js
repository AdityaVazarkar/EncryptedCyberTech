import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Style/Book.css";
import { dataDigitalBestSeller } from "../Data/Bookdata";
import Base from "../component/Base";
import Footer from "../component/Footer"
// import imgGirl from "../assets/defaultImage.jpg";

function Book() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      // linkDefault: imgGirl,
    }));
  };

  return (
    <Base>
      <div className="book-container bg-black">
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>E-Book</h1>
        </div>
        <div className="App">
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item) => (
              <div>
                <div className="card">
                  <div className="card-top">
                    <img
                      src={
                        defaultImage[item.title] === item.title
                          ? defaultImage.linkDefault
                          : item.linkImg
                      }
                      alt={item.title}
                      onError={handleErrorImage}
                    />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="card-bottom">
                    <h3>{item.info}</h3>
                    <span className="category">{item.category}</span>
                  </div>
                </div>
                <button>{item.click}click</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer/>
    </Base>
  );
}

export default Book;
