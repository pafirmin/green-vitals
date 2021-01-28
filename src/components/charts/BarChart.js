import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const BarChart = ({ data, colours }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const canvasRef = useRef(null);
  const BAR_WIDTH = 60;
  const BAR_GAP = 10;
  const LABEL_PADDING = 30;
  const TOP_PADDING = 30;
  const MAX_VALUE = data.reduce(
    (max, obj) => (obj.value > max ? Math.ceil(obj.value / 10) * 10 : max),
    0
  );

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    generateChart(ctx);
  }, [data, isMobile]);

  const generateChart = (ctx) => {
    console.log(MAX_VALUE);
    clearCanvas(ctx);
    const chartWidth = BAR_GAP + (BAR_WIDTH + BAR_GAP) * data.length;
    const chartHeight = canvasRef.current.height - LABEL_PADDING - TOP_PADDING;
    ctx.font = ".9rem arial";
    ctx.fontWeight = "400";
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#fff";
    ctx.textAlign = "right";

    // Draw X Axis
    ctx.beginPath();
    ctx.moveTo(LABEL_PADDING, chartHeight + TOP_PADDING);
    ctx.lineTo(chartWidth + 25, chartHeight + TOP_PADDING);
    ctx.stroke();

    // Draw Y Axis
    ctx.beginPath();
    ctx.moveTo(LABEL_PADDING, TOP_PADDING);
    ctx.lineTo(LABEL_PADDING, chartHeight + TOP_PADDING);
    ctx.stroke();

    // Draw Y values
    for (let i = 1; i >= 0; i -= 0.1) {
      const value = Math.round(MAX_VALUE * i);
      const valueY = chartHeight + TOP_PADDING - chartHeight * i;
      ctx.fillText(value, 25, valueY);
    }

    // Draw bars
    let accum = BAR_GAP + LABEL_PADDING;
    data.forEach((obj) => {
      drawBar(ctx, chartHeight, accum, obj);
      accum += BAR_WIDTH + BAR_GAP;
    });
  };

  const drawBar = (ctx, chartHeight, accum, obj) => {
    const canvas = canvasRef.current;
    const barProportion = (obj.value / MAX_VALUE) * 100;
    const barHeight = (barProportion / 100) * chartHeight;
    const rectX = accum;
    const rectY = canvas.height - (barHeight + LABEL_PADDING);

    // Draw bar
    ctx.fillStyle = colours[obj.label];
    ctx.fillRect(rectX, rectY, BAR_WIDTH, barHeight);

    // Draw label
    const labelX = rectX + BAR_WIDTH / 2;
    const labelY = rectY + barHeight + 20;

    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.fillText(`${obj.label}`, labelX, labelY);
  };

  const clearCanvas = (ctx) => {
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <canvas
      ref={canvasRef}
      width="550"
      height="400"
      style={{ width: isMobile ? "100%" : "auto" }}
    ></canvas>
  );
};

export default BarChart;
