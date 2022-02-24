import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState(new Values("#f15025").all(10));
  const [alert, setAlert] = useState(false);
  const [itemClicked, setItemClicked] = useState("");
  const [inputedColor, setInputedColor] = useState("");
  console.log(color);

  const setChangeAlert = (id, hex) => {
    setAlert(true);
    console.log("alert changed", id);
    setItemClicked(id);
    navigator.clipboard.writeText(`#${hex}`);
  };

  const generateColor = (colr) => {
    console.log("typed color", colr);
    setColor(new Values(`${colr}`).all(10));
  };

  return (
    <div className="section">
      <h2 className="mt-2 text-center">color generator project</h2>
      <input
        type="text"
        placeholder="Type color"
        onChange={(e) => setInputedColor(e.target.value)}
        value={inputedColor}
        style={{ margin: "1rem" }}
      />
      <button className="btn" onClick={() => generateColor(inputedColor)}>
        Generate
      </button>
      <div className="grid-color-container">
        {color.map((colo, index) => {
          const clickedColor =
            itemClicked === index ? <p>copied to clipboard</p> : "";
          return (
            <SingleColor
              singleColor={colo}
              key={index}
              num={index}
              changeAlert={setChangeAlert}
              clickedColor={clickedColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
