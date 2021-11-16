const path = require('path');

const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv').config();

const getGeoCode = require('../utils/geocode');
const getForecast = require('../utils/forecast');

const app = express();
// configure paths
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// serve static files
app.use(express.static(publicDirPath));

// setup view engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// register partials
hbs.registerPartials(partialsPath);

// test env variables
// console.log(process.env.MAPBOX_APIKEY);

app.get('/', (req, res) => {
  res.render('index', {
    page_title: 'Weather App',
    title: 'Weather App',
    name: 'rejan bajracharya',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    page_title: 'About Page',
    title: 'About Page',
    name: 'rejan bajracharya',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    page_title: 'Help Page',
    title: 'Help Page',
    name: 'Rejan Bajracharya',
  });
});

app.get('/help/*', (req, res) => {
  res.send('<h1> Article not found </h1> ');
});

app.get('/weather', async (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: 'Please provide a address ',
    });
  }

  try {
    const {
      data: { features },
    } = await getGeoCode(address);
    if (features.length === 0) {
      res.send({ status: 200, error: 'Address not found' });
    }
    const [longitude, latitude] = features[0].center;
    const {
      data: { location, current },
    } = await getForecast(longitude, latitude);

    res.send({ status: 200, data: { location, current } });
  } catch (error) {
    res.send({ status: error.status, message: error.message });
  }

  // getGeoCode(address)
  //   .then((response) => {
  //     return new Promise((resolve, reject) => {
  //       const { features } = response.data;
  //       if (features.length === 0) {
  //         reject({ status: 200, error: 'Address not found' });
  //       }
  //       const [latitude, longitude] = features[0];
  //       resolve({ status: 200, data: { latitude, longitude } });
  //     });
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     const { latitude, longitude } = response;
  //     getForecast(longitude, latitude)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => res.send({ status: 200, error: error.message }));
  //   })
  //   .catch((error) => res.send(error));
});

app.get('*', (req, res) => {
  res.render('404', {
    page_title: 'Error Page',
    title: 'Error Page',
    message: '404. Page not found ',
    name: 'rejan bajracharya',
  });
});

app.listen(3000, () => console.log('server started at port 3000'));
