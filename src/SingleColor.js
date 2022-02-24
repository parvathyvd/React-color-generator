import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ singleColor, num, changeAlert, clickedColor }) => {
  const { rgb, weight, hex } = singleColor;
  const bcg = rgb.join();

  return (
    <>
      <div
        className="grid-child"
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => changeAlert(num, hex)}
      >
        <div className="result">
          <p className={`percent-value ${num > 10 && "white"}`}>#{hex}</p>
          <p className={`color-value ${num > 10 && "white"}`}>{weight}%</p>
        </div>
        {clickedColor}
      </div>
    </>
  );
};

export default SingleColor;
