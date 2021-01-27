import axios from "axios";

const fetchLocationData = async (postcode) => {
  try {
    const formattedPostcode = postcode.replace(/\s/g, "");

    const res = await axios.get(
      `https://api.postcodes.io/postcodes/${formattedPostcode}`
    );

    const { admin_district, outcode, latitude, longitude } = res.data.result;

    return {
      admin_district,
      outcode,
      latitude,
      longitude,
    };
  } catch (err) {
    throw err;
  }
};

const fetchEnergeyData = async (outcode) => {
  try {
    const date = new Date().toISOString();

    const res = await axios.get(
      `https://api.carbonintensity.org.uk/regional/intensity/${date}/fw48h/postcode/${outcode}`
    );

    return res.data.data.data[0];
  } catch (err) {
    throw err;
  }
};

const fetchPollutionData = async (lat, long) => {
  try {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
    );

    return res.data.list[0];
  } catch (err) {
    throw err;
  }
};

const services = { fetchLocationData, fetchPollutionData, fetchEnergeyData };

export default services;
