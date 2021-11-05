const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONT_END_URL }));

app.use('/api/v1', router);

module.exports = app;
