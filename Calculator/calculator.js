const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Addition Calculator

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
})

app.post('/', function(req, res) {
    res.send("Result: " + (Number(req.body.num1) + Number(req.body.num2)));
})

// BMI Calculator

app.get('/bmicalculator', function(req, res) {
    res.sendFile('bmiCalculator.html', { root: __dirname });
})

app.post('/bmicalculator', function(req, res) {
    const result = (Number(req.body.weight) / (Number(req.body.height) * 0.01) ** 2).toFixed(1);
    res.send("Result: " + result);
})

// Port address

app.listen(3000);