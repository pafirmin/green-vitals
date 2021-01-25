import React from "react";
import styled from "styled-components";

const PieChart = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: ${(props) =>
    `conic-gradient(transparent 0 .5%, ${props.gradientValues})`};
`;

const getGradientPortions = (data) => {
  const values = [];

  data.reduce((count, perc) => {
    values.push(count + perc);
    return count + perc;
  }, 0);

  return values;
};

const getGradientValues = (data) => {
  const chartColours = {
    gas: "#609b4b",
    hydro: "#15a6a5",
    biomass: "#eac8ba",
    coal: "#d510ed",
    imports: "#8c1043",
    solar: "#88627a",
    wind: "#88627a",
    other: "#8adba8",
    nuclear: "#eb2bee",
  };

  const percentages = data.map((fuel) => Math.round(fuel.perc));
  const chartPortions = getGradientPortions(percentages);

  const fuels = data.map((fuel) => fuel.fuel);
  const values = fuels.map(
    (fuel, i) =>
      `${chartColours[fuel]} 0 ${chartPortions[i]}%, transparent 0  ${
        chartPortions[i] + 0.5
      }%`
  );

  return values.join(", ");
};

const Chart = ({ data }) => {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <PieChart gradientValues={getGradientValues(data)} />
    </div>
  );
};

export default Chart;
