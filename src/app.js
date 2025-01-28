require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getData } = require('./controllers/getDataController');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', getData);

module.exports = app;
