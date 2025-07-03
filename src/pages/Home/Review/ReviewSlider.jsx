import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import reviews from "../../../data/reviewData"; // Adjust path as needed
import "./reviewSlider.css"; // we'll create this for custom zoom effect
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const ReviewSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance) {
          swiperInstance.params.navigation.prevEl = prevRef.current;
          swiperInstance.params.navigation.nextEl = nextRef.current;
          swiperInstance.navigation.destroy(); // Re-initialize
          swiperInstance.navigation.init();
          swiperInstance.navigation.update();
        }
      }, [swiperInstance]);
  return (
    <div className="max-w-6xl mx-auto my-20 py-15 text-center bg-base-200">
      <h2 className="text-2xl font-bold pb-2">What our customers are sayings</h2>
<p  className="w-1/2 pb-10 mx-auto text-center">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
     

      

      <Swiper
  onSwiper={setSwiperInstance}
  slidesPerView={5}
  centeredSlides={true}
  loop={true}
  autoplay={{ delay: 3000 }}
  pagination={{ el: ".custom-pagination", clickable: true }}
  modules={[Autoplay, Pagination, Navigation]}
  className="review-swiper"
>
        {reviews.map((item, index) => (
          <SwiperSlide key={index} className="review-slide">
            <div className="transition-all duration-300 ease-in-out  mt-12 rounded-2xl md:mt-10 mb-10  flex flex-col items-center gap-4 ">
              <img
                src={item.picture}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white"
              />
              <p className="text-sm text-gray-600 italic px-2">"{item.review}"</p>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <span className="text-xs text-gray-500">{item.position}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex mt-10 mx-15 px-8 justify-center gap-2">
        <button
          ref={prevRef}
          className="transition items-end "
        >
          <FaArrowLeft />
        </button>
        <div className="custom-pagination items-center flex justify-center gap-2" />
       
        <button
          ref={nextRef}
          className=" items-end"
        >
          <FaArrowRight />
        </button>
      </div>
      </div>
     
    
  );
};

export default ReviewSlider;
