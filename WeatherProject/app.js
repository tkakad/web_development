// Initializing npm packages
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

// Initializing the express package for the application

const app = express();

// Initializing body parser for the application

app.use(bodyParser.urlencoded({extended: true}));

// Root path functions

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/', function(req, res) {
    const appid = 'ecbf1d6fe742065581fe7f1e7106b84d';
    const units = 'metric';
    const q = req.body.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`;
    
    https.get(url, function(response) {
        response.on('data', function(d) {
            const weatherData = JSON.parse(d);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            // const icon =  ;
            const imageURL = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            res.write(`<h1>The temperature in ${q} is ${temp} C.</h1>`);
            res.write('<p>The weather is currently ' + description + ".</p>");
            res.write(`<img src="${imageURL}" alt="weather-img">`);
            res.send();
        });
    });
});

// 


// Host Address

app.listen(3000);