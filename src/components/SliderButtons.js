import React, { useState } from "react";

const SliderButtons = ({ onNextChange, currSlide }) => {
  return (
    <div className="button-container">
      <button className="button button-prev">PREV</button>
      <button onClick={onNextChange} className="button button-next">
        NEXT
      </button>
      <div>Count: {currSlide}</div>
    </div>
  );
};

export default SliderButtons;
