import React, { useCallback } from "react";
import PieChart from "../charts/PieChart";
import Table from "../charts/Table";

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

const EnergyData = ({ data }) => {
  const chartData = useCallback(() => {
    const filteredData = data.generationmix.filter((obj) => obj.perc > 0.5);
    const total = filteredData.reduce((count, obj) => count + obj.perc, 0);
    const formattedData = filteredData.map((obj) => {
      return {
        perc: obj.perc,
        label: obj.fuel,
        radians: (obj.perc / total) * (Math.PI * 2),
      };
    });
    return formattedData;
  }, [data]);

  return (
    <div style={{ borderTop: "2px solid #fff", padding: ".5rem 0" }}>
      <header style={{ textAlign: "center" }}>
        <h3>Energy Overview</h3>
        <p>
          Carbon Intensity:{" "}
          {`${data.intensity.forecast} (${data.intensity.index})`}
        </p>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table data={data.generationmix} />
        <PieChart data={chartData()} chartColours={chartColours} />
      </div>
    </div>
  );
};

export default EnergyData;
