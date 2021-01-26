import React, { useCallback } from "react";
import BarChart from "../charts/BarChart";
import Table from "../charts/Table";
import DataContainer from "../layout/DataContainer";

const barColours = {
  no: "#79db88",
  no2: "#ffb555",
  o3: "#a8d6ff",
  so2: "#3079b9",
  pm2_5: "#443636",
  pm10: "#5de6c6",
  nh3: "#e65d5d",
};

const airIndex = {
  1: "Good",
  2: "Fair",
  3: "Moderate",
  4: "Poor",
  5: "Very Poor",
};

const pollutantIndex = {
  co: "Carbon monnoxide",
  no: "Nitrous oxide",
  no2: "Nitrous dioxide",
  o3: "Ozone",
  so2: "Sulphur dioxide",
  pm2_5: "Fine particulates",
  pm10: "Coarse particulates",
  nh3: "Ammonia",
};

const PollutionData = ({ data }) => {
  const chartData = useCallback(() => {
    return Object.keys(data.components)
      .filter((key) => key !== "co")
      .map((key) => ({
        label: key,
        value: data.components[key],
      }));
  }, [data]);

  const tableData = useCallback(() => {
    return Object.entries(data.components).map(([pollutant, value]) => [
      pollutantIndex[pollutant],
      value,
    ]);
  }, [data]);

  return (
    <section style={{ borderTop: "2px solid #fff", padding: ".5rem 0" }}>
      <header style={{ textAlign: "center" }}>
        <h3>Pollution Overview</h3>
        <p>
          Air Quality Index: {`${data.main.aqi} (${airIndex[data.main.aqi]})`}
        </p>
      </header>

      <DataContainer>
        <BarChart data={chartData()} colours={barColours} />
        <Table headings={["Pollutant", "ug/m3"]} data={tableData()} />
      </DataContainer>
    </section>
  );
};

export default PollutionData;
