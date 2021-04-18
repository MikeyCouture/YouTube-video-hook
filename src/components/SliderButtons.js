import React from "react";

const SliderButtons = ({ onNextChange, onPrevChange }) => {
  return (
    <div className="button-container ui large buttons">
      <button onClick={onPrevChange} className="button button-prev ui button">
        PREV
      </button>
      <div className="or"></div>
      <button onClick={onNextChange} className="button button-next ui button">
        NEXT
      </button>
    </div>
  );
};

export default SliderButtons;
