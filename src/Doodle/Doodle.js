import React, { useState, useEffect, useReducer } from "react";
import DoodleColors from "../components/DoodleColors";
import Canvas from "./Canvas";

function Doodle(props) {
  const [colors] = useState([
    "#000000",
    "#FF0C00",
    "#0017FF",
    "#FFFB00",
    "#39FF00",
    "#8600FF",
    "#FF8300",
  ]);
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <>
      <header className="header">
        <DoodleColors
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </header>
      <div className="doodle">
        <Canvas
          color={activeColor}
          height={window.innerHeight}
          width={window.innerWidth}
          sideWidth={props.sideWidth}
        />
      </div>
    </>
  );
}

export default Doodle;
