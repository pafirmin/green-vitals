import React, { useEffect, useRef } from "react";

const BarChart = ({ data, colours }) => {
  console.log(data);
  const canvasRef = useRef(null);
  const BAR_WIDTH = 60;
  const BAR_GAP = 10;

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    generateChart(ctx);
  });

  const generateChart = (ctx) => {
    clearCanvas(ctx);

    let accum = 0;
    data.forEach((obj) => {
      drawBar(ctx, accum, obj);
      accum += BAR_WIDTH + BAR_GAP;
    });
  };

  const drawBar = (ctx, accum, obj) => {
    const canvas = canvasRef.current;
    const width = BAR_WIDTH;
    const height = obj.count * 6;
    const rectX = accum;
    const rectY = canvas.height - (height + 30);

    ctx.fillStyle = colours[obj.label];
    ctx.fillRect(rectX, rectY, width, height);

    const labelX = rectX + BAR_WIDTH / 2;
    const labelY = rectY + height + 20;
    ctx.font = ".9rem arial";
    ctx.fontWeight = "400";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(`${obj.label}`, labelX, labelY);
  };

  const clearCanvas = (ctx) => {
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return <canvas ref={canvasRef} width="520" height="300"></canvas>;
};

export default BarChart;
