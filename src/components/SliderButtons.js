import React from "react";

const SliderButtons = ({ onNextChange, onPrevChange }) => {
  return (
    <div className="button-container">
      <button onClick={onPrevChange} className="button button-prev">
        PREV
      </button>
      <button onClick={onNextChange} className="button button-next">
        NEXT
      </button>
    </div>
  );
};

export default SliderButtons;
