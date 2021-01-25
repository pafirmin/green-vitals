import React, { Fragment, useState } from "react";
import axios from "axios";
import Chart from "./components/Chart";
import Loader from "./components/Loader";
import { GlobalStyle } from "./GlobalStyle";
import PostCodeForm from "./components/PostCodeForm";
import Canvas from "./components/Canvas";

const App = () => {
  const [data, setData] = useState();
  const [postCode, setPostCode] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPostCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const date = new Date();
      console.log(date.toISOString());

      const res = await axios.get(
        `https://api.carbonintensity.org.uk/regional/intensity/${date.toISOString()}/fw48h/postcode/${postCode}`
      );
      setData(res.data.data.data[0].generationmix);
      setLocation(res.data.data.shortname);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <GlobalStyle />
      <PostCodeForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <div style={{ margin: "auto", textAlign: "center" }}>
        <h3>{location}</h3>
        <Canvas data={data} />
      </div>
      {loading && <Loader />}
    </Fragment>
  );
};

export default App;
