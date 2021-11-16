const axios = require('axios');

module.exports = geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoidGVzdG1lbm90IiwiYSI6ImNrdnc5NGQ0bDA2MnUycXI1ZTdqaTVwaHEifQ.OtgNpmyib1M-FGvdLGI_kg&limit=1`;
  // console.log(url);
  axios
    .get(url)
    .then((response) => {
      if (response.data.features.length === 0) {
        callback('Unable to find location. Try another search');
      } else {
        const [lat, long] = response.data.features[0].center;
        const { place_name } = response.data.features[0];
        callback(undefined, { long, lat, place_name });
      }
    })
    .catch((error) => {
      console.log(error);
      callback('Unable to connect to location services');
    });
};
