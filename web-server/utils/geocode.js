const axios = require('axios');
const dotenv = require('dotenv').config();

const getGeoCode = (address) => {
  return new Promise((resolve, reject) => {
    const API_KEY = process.env.MAPBOX_APIKEY;

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${API_KEY}&limit=1`;
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = getGeoCode;
