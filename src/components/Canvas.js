import React, { useEffect, useRef } from "react";

const Canvas = ({ data }) => {
  useEffect(() => {
    data && generatePie();
  });

  const chartColours = {
    biomass: "#79db88",
    solar: "#ffb555",
    wind: "#a8d6ff",
    hydro: "#3079b9",
    coal: "#443636",
    nuclear: "#5de6c6",
    imports: "#e65d5d",
    gas: "#6e5de6",
    other: "#eb2bee",
  };

  const generatePie = () => {
    clearCanvas();
    const filteredData = data.filter((fuel) => fuel.perc > 0.3);
    const total = filteredData.reduce((count, fuel) => count + fuel.perc, 0);
    const formattedData = filteredData.map((fuel) => {
      return {
        ...fuel,
        radians: (fuel.perc / total) * (Math.PI * 2),
      };
    });

    let accum = 0;
    formattedData.forEach((fuel) => {
      drawSlice(accum, fuel);
      accum += fuel.radians;
    });
  };

  const drawSlice = (arcStart, fuelData) => {
    const { fuel, perc, radians } = fuelData;
    const chart = document.getElementById("chart");
    const ctx = chart.getContext("2d");
    const [centerX, centerY] = [chart.width / 2, chart.height / 2];
    const radius = (chart.height / 2) * 0.75;
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

  const clearCanvas = () => {
    const canvas = document.getElementById("chart");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <canvas id="chart" width="700" height="400"></canvas>
    </div>
  );
};

export default Canvas;
