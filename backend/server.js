import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import data from '../data.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();


app.get('/api/products',(req,res )=>{
    res.send(data.products)
})

const port  =process.env.PORT||5000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  }).on('error', (err) => {
    console.error(`An error occurred while starting the server: ${err}`);
  });
