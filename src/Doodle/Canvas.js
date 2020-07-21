import React, { useState, useRef, useEffect } from "react";
import useWindowSize from "../components/WindowSize";

function Canvas(props) {
  const [drawing, setDrawing] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const canvasRef = useRef();
  const context = useRef();

  const sideWidthX = props.sideWidth - 5;
  const navHeightY = -5;

  //window.innerWidth >= 760 ?
  //console.log(canvasRef.current)

  useEffect(() => {
    context.current = canvasRef.current.getContext("2d");
  }, []);

  const [windowWidth, windowHeight] = useWindowSize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight - navHeightY);
  });

  function handleMouseMove(e) {
    const x = e.clientX;
    const y = e.clientY - navHeightY;
    const coords = [
      x - canvasRef.current.offsetLeft,
      y - canvasRef.current.offsetTop,
    ];

    if (drawing) {
      context.current.lineTo(...coords);
      context.current.stroke();
    }
    if (props.handleMouseMove) {
      props.handleMouseMove(...coords);
    }
  }

  function startDrawing(e) {
    context.current.lineJoin = "round";
    context.current.lineCap = "round";
    context.current.lineWidth = 10;
    context.current.strokeStyle = props.color;
    context.current.beginPath();

    const x = e.clientX - sideWidthX;
    const y = e.clientY - navHeightY;

    context.current.moveTo(
      x - canvasRef.current.offsetLeft,
      y - canvasRef.current.offsetTop
    );
    setDrawing(true);
  }

  function stopDrawing() {
    context.current.closePath();
    setDrawing(false);
  }

  return (
    <canvas
      ref={canvasRef}
      width={width - 115}
      height={400}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      onMouseMove={handleMouseMove}
    />
  );
}

export default Canvas;
