const path = require('path');

const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv').config();

// console.log(process.env.test);
const app = express();
// configure paths
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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

app.get('/weather', (req, res) => {
  res.send({
    location: 'kathmandu',
    forecast: {
      temperature: 22,
      feelslike: 21,
      precip: 0,
    },
  });
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
