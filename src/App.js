import React, { Fragment, useEffect, useState } from "react";
import services from "./services/requests";
import { GlobalStyle } from "./GlobalStyle";
import PostCodeForm from "./components/PostCodeForm";
import Canvas from "./components/Canvas";

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
      const { outcode } = locationData;
      services.fetchEnergeyData(outcode).then((data) => setEnergyData(data));
    }
  }, [submitted, locationData]);

  return (
    <Fragment>
      <GlobalStyle />
      <PostCodeForm
        setLocationData={setLocationData}
        setSubmitted={setSubmitted}
      />
      <div style={{ margin: "auto", textAlign: "center" }}>
        <h3>{locationData.admin_district}</h3>
        <Canvas data={energyData} />
      </div>
    </Fragment>
  );
};

export default App;
