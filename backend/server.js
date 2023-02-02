import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import data from '../data.js';


const app = express();
// import cors from 'cors';
// var cors = require('cors');
// app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app
  .listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  })
  .on('error', (err) => {
    console.error(`An error occurred while starting the server: ${err}`);
  });
