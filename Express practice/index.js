const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/api', routes);


app.listen(8090, () => console.log ('Server is starting at port 8090'));