import React, { Fragment, useEffect, useState } from "react";
import services from "./services/requests";
import { GlobalStyle } from "./GlobalStyle";
import PostCodeForm from "./components/PostCodeForm";
import EnergyData from "./components/energy-data/EnergyData";
import Loader from "./components/utils/Loader";
import PollutionData from "./components/pollution-data/PollutionData";
import Logo from "./components/layout/Logo";
import Windmill from "./components/Windmill";

const App = () => {
  const [loading, setLoading] = useState(false);
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
  }, [submitted, locationData]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const { outcode, latitude, longitude } = locationData;

      const [pollutionRes, energyRes] = await Promise.all([
        services.fetchPollutionData(latitude, longitude),
        services.fetchEnergeyData(outcode),
      ]);

      setEnergyData(energyRes);
      setPollutionData(pollutionRes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <GlobalStyle />
      {loading && <Loader />}
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo submitted={submitted} />
          <PostCodeForm
            setLocationData={setLocationData}
            setSubmitted={setSubmitted}
          />
        </div>
        <div style={{ margin: "120px auto 0 auto" }}>
          {!loading && (
            <h2 style={{ marginLeft: "1rem" }}>
              {locationData.admin_district}
            </h2>
          )}
          {!loading && energyData && <EnergyData data={energyData} />}
          {!loading && pollutionData && <PollutionData data={pollutionData} />}
        </div>
        <Windmill submitted={submitted} />
      </div>
    </Fragment>
  );
};

export default App;
