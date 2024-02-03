import express from 'express';
import setupExpress from './config/express.js';
import 'dotenv/config'

const app = express();
setupExpress(app);

app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}! Now its up to you...`));