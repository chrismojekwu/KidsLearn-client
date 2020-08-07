import React, { useState, useRef, useEffect } from "react";

function Canvas(props) {
  const [drawing, setDrawing] = useState(false);
  const [width] = useState(window.innerWidth);

  const canvasRef = useRef();
  const context = useRef();

  const sideWidthX = props.sideWidth - 5;
  const navHeightY = -5;

  useEffect(() => {
    context.current = canvasRef.current.getContext("2d");
  }, []);

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

  function handleTouchMove(e) {
    const coords = [
      e.changedTouches[0].clientX - 100,
      e.changedTouches[0].clientY - 200,
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
      width={window.innerWidth <= 768 ? width : width - 250}
      height={400}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      onMouseMove={handleMouseMove}
      onTouchStartCapture={startDrawing}
      onTouchEndCapture={stopDrawing}
      onTouchMoveCapture={startDrawing}
      onTouchMove={handleTouchMove}
    />
  );
}

export default Canvas;
