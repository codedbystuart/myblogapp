const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', () => console.error.bind('connection error:'));
db.once('open', () => console.log('connected successfully'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);