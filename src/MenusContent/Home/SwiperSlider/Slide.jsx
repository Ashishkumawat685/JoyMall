import React, { useState } from "react";
import "./Slide.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider({ SlideWidth }) {
  
  return (
    <>
    
      <div className="Slider_Container">
        <div
          className="Slider_content"
          style={{
            width: SlideWidth ? "75%" : "100%",
            marginLeft: SlideWidth ? "25%" : "0%",
          }}
        >
          <div className="Slide_box1">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              <SwiperSlide className="SwiperSlider_box1">
                <div className="SwiperSlider_box_content">
                  <p>Deal of the week</p>

                  <h1>
                    HeadPhones <br /> ProMax
                  </h1>

                  <button>Shop Now</button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="SwiperSlider_box1">
                <div className="SwiperSlider_box_content">
                  <p>Feel the real quality sound</p>

                  <h1>
                    Powerfull <br />
                    iPad Pro M2
                  </h1>

                  <button>Shop Now</button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="SwiperSlider_box1">
                <div className="SwiperSlider_box_content">
                  <p>Virutal Reality Glasses</p>

                  <h1>
                    Experience <br /> New Reality
                  </h1>

                  <button>Shop Now</button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="Slide_box2">
            <Swiper
              direction="vertical"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper mySwiper2"
            >
              <SwiperSlide className="SwiperSlider_box">
                <img
                  src="https://cartzilla-html.createx.studio/assets/img/home/electronics/hero-slider/01.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="SwiperSlider_box">
                <img
                  src="https://cartzilla-html.createx.studio/assets/img/home/electronics/hero-slider/02.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="SwiperSlider_box">
                <img
                  src="https://cartzilla-html.createx.studio/assets/img/home/electronics/hero-slider/03.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export { Slider };
