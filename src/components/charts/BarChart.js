import React, { useEffect, useRef } from "react";

const BarChart = ({ data, colours }) => {
  const canvasRef = useRef(null);
  const BAR_WIDTH = 60;
  const BAR_GAP = 10;
  const MAX_VALUE = 60;
  const LABEL_PADDING = 30;

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    generateChart(ctx);
  }, [data]);

  const generateChart = (ctx) => {
    clearCanvas(ctx);

    ctx.font = ".9rem arial";
    ctx.fontWeight = "400";
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#fff";
    ctx.textAlign = "right";

    // Draw Y Axis
    const chartHeight = canvasRef.current.height;
    ctx.beginPath();
    ctx.moveTo(LABEL_PADDING, 1);
    ctx.lineTo(LABEL_PADDING, chartHeight - LABEL_PADDING);
    ctx.stroke();

    // Draw X Axis
    ctx.beginPath();
    ctx.moveTo(LABEL_PADDING, chartHeight - LABEL_PADDING);
    ctx.lineTo(canvasRef.current.width, chartHeight - LABEL_PADDING);
    ctx.stroke();

    // Draw values
    for (let i = 1; i >= 0; i -= 0.25) {
      const value = MAX_VALUE * i;
      const valueY = chartHeight - chartHeight * i - LABEL_PADDING;
      ctx.fillText(value, 25, valueY);
    }

    // Draw
    let accum = BAR_GAP + LABEL_PADDING;
    data.forEach((obj) => {
      drawBar(ctx, accum, obj);
      accum += BAR_WIDTH + BAR_GAP;
    });
  };

  const drawBar = (ctx, accum, obj) => {
    // Draw bars
    const canvas = canvasRef.current;
    const barProportion = (obj.count / MAX_VALUE) * 100;
    const barHeight = (barProportion / 100) * canvas.height;
    const rectX = accum;
    const rectY = canvas.height - (barHeight + LABEL_PADDING);

    ctx.fillStyle = colours[obj.label];
    ctx.fillRect(rectX, rectY, BAR_WIDTH, barHeight);

    // Draw labels
    const labelX = rectX + BAR_WIDTH / 2;
    const labelY = rectY + barHeight + 20;

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
