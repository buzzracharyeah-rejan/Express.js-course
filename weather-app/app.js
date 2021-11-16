const path = require('path');
const yargs = require('yargs');
const chalk = require('chalk');
const axios = require('axios');
const dotenv = require('dotenv');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(__dirname);
// dotenv.config({ path: path.join(__dirname, '/.env') });
// console.log(process.env.API_KEY);

const url_mapbox =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGVzdG1lbm90IiwiYSI6ImNrdnc5NGQ0bDA2MnUycXI1ZTdqaTVwaHEifQ.OtgNpmyib1M-FGvdLGI_kg&limit=1';

const url_weather =
  'http://api.weatherstack.com/current?access_key=bb631d1e69f768b03f84d3da457ee84b&query=kathmandu';

yargs.command(
  'location',
  'A user location',
  {
    location: {
      alias: 'L',
      demandOption: true,
      type: 'string',
      describe: 'A user defined location',
    },
  },
  (argv) => {
    geocode(argv.location, (error, data) => {
      console.log(error);
      const { lat, long } = data;
      forecast(lat, long, (error, data) => {
        console.log(error);
        console.log(data);
      });
    });
  }
);

yargs.parse();
