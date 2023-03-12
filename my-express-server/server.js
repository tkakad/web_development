var express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile('/index.html', {root: __dirname });
    console.log(req);
})

app.listen(3000, function() {
    console.log("Server started!");
});