import React, { Fragment } from "react";
import EnergyData from "../energy-data/EnergyData";
import PollutionData from "../pollution-data/PollutionData";

const MainContent = ({ data, location }) => {
  return (
    <div style={{ marginTop: "140px" }}>
      {data && (
        <Fragment>
          <h2 style={{ marginLeft: "1rem" }}>{location}</h2>
          <EnergyData data={data.energyData} />
          <PollutionData data={data.pollutionData} />
        </Fragment>
      )}
    </div>
  );
};

export default MainContent;
