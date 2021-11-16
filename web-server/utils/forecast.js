const axios = require('axios');
const dotenv = require('dotenv').config();

const getForecast = (long, lat) => {
  const API_KEY = process.env.WEATHERSTACK_APIKEY;
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${lat},${long}&units=f`;
  console.log(url);
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

module.exports = getForecast;
