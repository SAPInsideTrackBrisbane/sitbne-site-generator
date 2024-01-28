import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import perlin from './perlin.js';
import "./MainHeader.css";
// class MainHeader extends React.Component {

//     render() {
//         const canvasRef = useRef();
//         const { children, cover } = this.props;
//         const classes = classNames("main-header", this.props.className, {
//             "no-cover": !cover
//         });
//         return (<header className={classes}>
//         <canvas id="canvas" style={{position:'absolute', height: '100%', width: '100%', top: '0px', left: '0px'}}></canvas>
//         {children}
//       </header>);
//     }
// }
// export default MainHeader;
export default function MainHeader({ children }) {
  const canvasRef = useRef();
  const requestRef = useRef();
  const curveAmplitude = 300;
  const curveFrequency = 0.00001;
  const pointDensity = 100; // Adjust the density of points
  const speed = 0.0002;
  const riverWidth = 30; // Adjust the width of the river
  const bankWidth = riverWidth + 20;
  let points = [];
  let xOffset = 0;

  const resize = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth + 1000;
    canvas.height = 600;
    canvas.style = `position: absolute; left: ${-50 / 2}px; bottom: 0px`;
  };
  
  // Create a Perlin noise generator
  perlin.noiseDetail(20, 0.25);
  
  function createPoints() {
    points = [];
    for (let x = 0; x <= canvas.width; x += pointDensity) {
      const y = canvas.height / 2 + curveAmplitude * perlin.noise(x / 200, xOffset);
      points.push({ x, y });
    }
  }

  function animate(s) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    requestRef.current = requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    createPoints();
  
    // Draw black-colored bank
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 2; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    ctx.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 1].x, points[points.length - 1].y);
    ctx.lineWidth = bankWidth; // Adjust the width of the bank
    ctx.strokeStyle = "black";
    ctx.stroke();
  
    // Draw thicker white line for the river
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 2; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    ctx.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 1].x, points[points.length - 1].y);
    ctx.lineWidth = riverWidth; // Adjust the width of the river
    ctx.strokeStyle = "white";
    ctx.stroke();
  
    xOffset += speed;

    // resize();
  }

  useEffect(() => {
    resize();
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once
  //style={{ position: "absolute", height: "100%", width: "100%", top: "0px", left: "0px" }}
  return (
    <header className="main-header">
      <canvas ref={canvasRef} id="canvas"></canvas>
      {children}
    </header>
  );
}
