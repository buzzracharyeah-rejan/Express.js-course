const axios = require('axios');

const forecast = (lat, long, callback) => {
  const weather_url = `http://api.weatherstack.com/current?access_key=bb631d1e69f768b03f84d3da457ee84b&query=${lat},${long}&units=f`;

  console.log(weather_url);

  axios
    .get(weather_url)
    .then((response) => {
      // console.log(response.data);
      if (response.data.error) {
        callback('Unable to find location');
      }
      const { temperature, feelslike, precip } = response.data.current;
      callback(undefined, { temperature, feelslike, precip });
    })
    .catch((error) => {
      callback('Unable to connect to weather service');
    });
};

module.exports = forecast;
