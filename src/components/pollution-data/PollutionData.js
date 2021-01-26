import React, { useCallback } from "react";
import BarChart from "../charts/BarChart";

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

const PollutionData = ({ data }) => {
  const formattedData = useCallback(() => {
    delete data.components.co;
    return Object.keys(data.components).map((key) => ({
      label: key,
      count: data.components[key],
    }));
  }, [data]);

  return (
    <div style={{ borderTop: "2px solid #fff", padding: ".5rem 0" }}>
      <header style={{ textAlign: "center" }}>
        <h3>Pollution Overview</h3>
        <p>
          Air Quality Index: {`${data.main.aqi} (${airIndex[data.main.aqi]})`}
        </p>
      </header>
      <BarChart data={formattedData()} colours={barColours} />
    </div>
  );
};

export default PollutionData;
