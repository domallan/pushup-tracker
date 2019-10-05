const express = require('express')
var app = express();
require('./app/controllers/appController')(app);
const path = require('path');
const bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs')

// const Tracker = require('./app/models/trackerModel');
//
// var tracker = new Tracker();
// var user = "Dom";
// tracker.addTarget("Sunday",100);
// tracker.addTarget("Monday",100);
// tracker.addTarget("Tuesday",150);

var routes = require('./app/routes/appRoutes')(app); //importing route
// routes(app);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
