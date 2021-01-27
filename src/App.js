import React, { useEffect, useState } from "react";
import services from "./services/requests";
import { GlobalStyle } from "./GlobalStyle";
import PostcodeForm from "./components/PostcodeForm";

import Loader from "./components/utils/Loader";
import Logo from "./components/layout/Logo";
import Windmill from "./components/Windmill";
import styled from "styled-components";
import MainContent from "./components/layout/MainContent";

const MainWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  min-height: 100vh;
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [locationData, setLocationData] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (locationData) {
      fetchData();
    }
  }, [submitted, locationData]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const { outcode, latitude, longitude } = locationData;

      const [pollutionData, energyData] = await Promise.all([
        services.fetchPollutionData(latitude, longitude),
        services.fetchEnergeyData(outcode),
      ]);

      setData({ energyData, pollutionData });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainWrapper>
      <GlobalStyle />
      {loading && <Loader />}
      <Logo submitted={submitted} />
      <PostcodeForm
        setLocationData={setLocationData}
        setSubmitted={setSubmitted}
      />
      <MainContentWrapper>
        <MainContent data={data} location={locationData?.admin_district} />
        <Windmill loading={loading} />
      </MainContentWrapper>
    </MainWrapper>
  );
};

export default App;
