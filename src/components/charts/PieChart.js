import React, { useEffect, useRef } from "react";

const PieChart = ({ data, chartColours }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    generatePie(ctx);
  }, [data]);

  const generatePie = (ctx) => {
    clearCanvas(ctx);

    let accum = 0;
    data.forEach((obj) => {
      drawSlice(ctx, accum, obj);
      accum += obj.radians;
    });
  };

  const drawSlice = (ctx, arcStart, obj) => {
    // Draw arcs
    const { label, value, radians } = obj;
    const canvas = canvasRef.current;
    const [centerX, centerY] = [canvas.width / 2, canvas.height / 2];
    const radius = (canvas.height / 2) * 0.75;
    const arcEnd = arcStart + radians;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, arcStart, arcEnd, false);
    ctx.closePath();
    ctx.fillStyle = chartColours[label];
    ctx.fill();

    // Draw labels
    const midPoint = arcStart + (arcEnd - arcStart) / 2;
    const labelPos = radius * 1.1;
    const labelX = centerX + labelPos * Math.cos(midPoint);
    const labelY = centerY + labelPos * Math.sin(midPoint);

    ctx.font = ".9rem arial";
    ctx.fontWeight = "400";
    ctx.fillStyle = "#fff";
    ctx.textAlign = labelX < centerX ? "right" : "left";
    ctx.fillText(`${label}: ${value}%`, labelX, labelY);
  };

  const clearCanvas = (ctx) => {
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <canvas ref={canvasRef} width="520" height="400"></canvas>
    </div>
  );
};

export default PieChart;
