import _ from 'lodash';
const express = require('express')
const app = express();
const port = 3000;
const temperature = require('./temperature.js');
const distance = require('./distance.js');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ 
    extended: true
  })); 


app.engine('ejs', require('ejs').__express);

app.get('/main', (req, res) => {
    res.render(__dirname + '/index.ejs');
});

app.use('/temperature', temperature);
app.use('/distance', distance);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});