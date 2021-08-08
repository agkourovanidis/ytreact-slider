import React from "react";
import "./ReactSlider.css";
// import leftArrow from "./icons/left-arrow.svg";
// import rightArrow from "./icons/right-arrow.svg";
import leftArrow from '../../img/left-arrow.svg'
import rightArrow from '../../img/right-arrow.svg'

export default function ReactBtnSlider({ direction, moveSlide }) {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "react_next" ? "react_btn-slide react_next" : "react_btn-slide react_prev"}
    >
      <img src={direction === "react_next" ? rightArrow : leftArrow} alt=''/>
    </button>
  );
}