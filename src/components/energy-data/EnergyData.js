import React, { useCallback } from "react";
import PieChart from "../charts/PieChart";
import Table from "../charts/Table";
import DataContainer from "../layout/DataContainer";

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
        value: obj.perc,
        label: obj.fuel,
        radians: (obj.perc / total) * (Math.PI * 2),
      };
    });
    return formattedData;
  }, [data]);

  const tableData = useCallback(() => {
    return data.generationmix
      .sort((a, b) => a.perc < b.perc)
      .map((fuel) => [fuel.fuel, fuel.perc]);
  }, [data]);

  return (
    <section style={{ borderTop: "2px solid #fff", padding: ".5rem 0" }}>
      <header style={{ textAlign: "center" }}>
        <h3>Energy Overview</h3>
        <p>
          Carbon Intensity:{" "}
          {`${data.intensity.forecast} (${data.intensity.index})`}
        </p>
      </header>
      <DataContainer>
        <Table headings={["Fuel source", "%"]} data={tableData()} />
        <PieChart data={chartData()} chartColours={chartColours} />
      </DataContainer>
    </section>
  );
};

export default EnergyData;
