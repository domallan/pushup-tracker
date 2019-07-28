const express = require('express')
const app = express();

var routes = require('./app/routes/approutes'); //importing route
routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
