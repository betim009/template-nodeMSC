const templteRoute = require('./src/routes/template');
const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());


app.use('/rota', templteRoute);

module.exports = app;