import React, { useEffect, useRef } from "react";

const Canvas = ({ data }) => {
  useEffect(() => {
    data && pie();
  });

  const chartColours = {
    biomass: "#8adba8",
    solar: "#ffb555",
    wind: "#a8d6ff",
    hydro: "#3079b9",
    coal: "#443636",
    nuclear: "#5de6c6",
    imports: "#e65d5d",
    gas: "#6e5de6",
    other: "#eb2bee",
  };
  const pie = () => {
    const filteredData = data.filter((fuel) => fuel.perc > 1);
    const total = filteredData.reduce((count, fuel) => count + fuel.perc, 0);

    const radians = filteredData.map((fuel) => {
      return {
        type: fuel.fuel,
        radians: (fuel.perc / total) * (Math.PI * 2),
      };
    });

    let accum = 0;
    radians.map((fuel, i) => {
      drawWedge(accum, fuel.radians + accum, fuel.type);
      accum += fuel.radians;
    });
  };

  const drawWedge = (start, end, fuel) => {
    const chart = document.getElementById("chart");
    const ctx = chart.getContext("2d");
    const [centerX, centerY] = [chart.width / 2, chart.height / 2];
    const radius = (chart.height / 2) * 0.75;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, start, end, false);
    ctx.closePath();
    ctx.fillStyle = chartColours[fuel];
    ctx.fill();

    const midPoint = start + (end - start) / 2;
    const labelPos = radius * 1.1;
    const labelX = centerX + labelPos * Math.cos(midPoint);
    const labelY = centerY + labelPos * Math.sin(midPoint);
    ctx.font = "1.2rem arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = labelX < centerX ? "right" : "left";
    ctx.fillText(fuel, labelX, labelY);
  };

  return (
    <div>
      <canvas id="chart" width="800" height="600"></canvas>
    </div>
  );
};

export default Canvas;
