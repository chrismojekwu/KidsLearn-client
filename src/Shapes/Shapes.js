import React, { useState } from "react";

function Shapes() {
  const [shape, setShape] = useState("br");
  const [color, setColor] = useState("transparent");

  const Details =
    shape === "rect"
      ? { width: 400, height: 200 }
      : shape === "square"
      ? { width: 200, height: 200 }
      : shape === "circle"
      ? { cx: 110, cy: 110, r: 100, width: 300, height: 100 }
      : shape === "triangle"
      ? { points: `150,35 300,300 3,300` }
      : shape === "star"
      ? { points: `150,15 60,297 285,117 15,117 240,297` }
      : shape === "hexagon"
      ? { points: `278,239 147,314 18,239 18,89 147,14 278,89` }
      : shape === "octagon"
      ? { points: `286,221 205,302 89,302 8,221 8,106 89,25 205,25 286,106` }
      : "";

  const Shape =
    shape === "square"
      ? "rect"
      : shape === "triangle" ||
        shape === "star" ||
        shape === "hexagon" ||
        shape === "octagon"
      ? "polygon"
      : `${shape}`;

  return (
    <main className="activity">
      <div className="shapes">
        <div className="shapesdisplay">
          <svg className="shape" viewBox="0 0 280 400" width="95%" height="410">
            <Shape
              {...Details}
              style={{ fill: `${color}`, strokeWidth: "3", stroke: `${color}` }}
              className="renderedSvg"
            />
          </svg>
        </div>

        <div className="controls">
          <form>
            <label>
              Choose a Shape
              <select
                onChange={(e) =>
                  setShape(
                    e.target.options[e.target.options.selectedIndex].value
                  )
                }
              >
                <option defaultValue>SHAPES</option>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="rect">Rectangle</option>
                <option value="triangle">Triangle</option>
                <option value="star">Star</option>
                <option value="hexagon">Hexagon</option>
                <option value="octagon">Octagon</option>
              </select>
            </label>
            <br />
            <label>
              Choose a Color
              <select
                onChange={(e) =>
                  setColor(
                    e.target.options[e.target.options.selectedIndex].value
                  )
                }
              >
                <option defaultValue>COLORS</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="pink">Pink</option>
                <option value="gray">Gray</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Shapes;
