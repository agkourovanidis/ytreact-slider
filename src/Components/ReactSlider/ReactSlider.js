import React, { useState } from "react";
import "./ReactSlider.css";
import ReactBtnSlider from "./ReactBtnSlider";
// import dataSlider from "./dataSlider";

export default function ReactSlider(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== props.slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === props.slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(props.slides.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="react_container-slider">
      {props.slides.map((slideImage, index) => (
        <div
          key={index}
          className={slideIndex === index + 1 ? "react_slide active-anim" : "react_slide"}
        >
          <img
            //   src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
            src={props.slides[slideIndex - 1]}
            alt=""
          />
        </div>
      ))}

      {/* <div className="showme"> */}
        <ReactBtnSlider moveSlide={nextSlide} direction={"react_next"} />
        <ReactBtnSlider moveSlide={prevSlide} direction={"react_prev"} />

        <div className="react_container-dots">
          {/* {Array.from({ length: 5 }).map((item, index) => ( */}
          {Array.from({ length: props.slides.length }).map((item, index) => (
            <div
              //// my
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "react_dot active" : "react_dot"}
            ></div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}
