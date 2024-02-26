import express from 'express';
import { engine as handlebars } from "express-handlebars"
import { indexRoute } from '../routes/index.js';
import mongoose from 'mongoose';
import { authRouter } from '../routes/auth.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
export default function setupExpress(app) {
    // app.use(express.urlencoded({ extended: true})); 
    app.use(cookieParser());

    //Setup the body parser and express.json
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //Setup session
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
      }))

    //Setup the view engine
    app.engine('.hbs', handlebars({
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    //Setup the static files
    app.use('/statics', express.static('static'));

    // Mongo DB Connections
    mongoose.connect(process.env.MONGO_DB_URL).then(response=>{
        console.log('MongoDB Connection Succeeded.')
    }).catch(error=>{
        console.log('Error in DB connection: ' + error)
    });

    //Setup the routes
    app.use('/', indexRoute);
    app.use('/', authRouter);

};