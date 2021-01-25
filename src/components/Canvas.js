import React, { useEffect, useRef } from "react";

const Canvas = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    data && generatePie(ctx);
  }, [data]);

  const chartColours = {
    biomass: "#79db88",
    solar: "#ffb555",
    wind: "#a8d6ff",
    hydro: "#3079b9",
    coal: "#443636",
    nuclear: "#5de6c6",
    imports: "#e65d5d",
    gas: "#8d7cdf",
    other: "#eb2bee",
  };

  const generatePie = (ctx) => {
    clearCanvas(ctx);
    const filteredData = data.filter((fuel) => fuel.perc > 0.5);
    const total = filteredData.reduce((count, fuel) => count + fuel.perc, 0);
    const formattedData = filteredData.map((fuel) => {
      return {
        ...fuel,
        radians: (fuel.perc / total) * (Math.PI * 2),
      };
    });

    let accum = 0;
    formattedData.forEach((fuel) => {
      drawSlice(ctx, accum, fuel);
      accum += fuel.radians;
    });
  };

  const drawSlice = (ctx, arcStart, fuelData) => {
    const { fuel, perc, radians } = fuelData;
    const canvas = canvasRef.current;
    const [centerX, centerY] = [canvas.width / 2, canvas.height / 2];
    const radius = (canvas.height / 2) * 0.75;
    const arcEnd = arcStart + radians;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, arcStart, arcEnd, false);
    ctx.closePath();
    ctx.fillStyle = chartColours[fuel];
    ctx.fill();

    const midPoint = arcStart + (arcEnd - arcStart) / 2;
    const labelPos = radius * 1.1;
    const labelX = centerX + labelPos * Math.cos(midPoint);
    const labelY = centerY + labelPos * Math.sin(midPoint);

    ctx.font = ".9rem arial";
    ctx.fontWeight = "400";
    ctx.fillStyle = "#fff";
    ctx.textAlign = labelX < centerX ? "right" : "left";
    ctx.fillText(`${fuel}: ${perc}%`, labelX, labelY);
  };

  const clearCanvas = (ctx) => {
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <canvas ref={canvasRef} width="700" height="400"></canvas>
    </div>
  );
};

export default Canvas;
