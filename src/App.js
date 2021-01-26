import React, { Fragment, useEffect, useState } from "react";
import services from "./services/requests";
import { GlobalStyle } from "./GlobalStyle";
import PostCodeForm from "./components/PostCodeForm";
import EnergyData from "./components/EnergyData";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [energyData, setEnergyData] = useState();
  const [pollutionData, setPollutionData] = useState();
  const [locationData, setLocationData] = useState({
    admin_district: "",
    outcode: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (submitted) {
      fetchData();
    }
  }, [locationData]);

  const fetchData = async () => {
    const { outcode, latitude, longitude } = locationData;
    const [pollutionRes, energyRes] = await Promise.all([
      services.fetchPollutionData(latitude, longitude),
      services.fetchEnergeyData(outcode),
    ]);

    setEnergyData(energyRes);
    setPollutionData(pollutionRes);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <PostCodeForm
        setLocationData={setLocationData}
        setSubmitted={setSubmitted}
      />
      <div style={{ margin: "auto" }}>
        <h2 style={{ marginLeft: "1rem" }}>{locationData.admin_district}</h2>
        {energyData && <EnergyData data={energyData} />}
      </div>
    </Fragment>
  );
};

export default App;
