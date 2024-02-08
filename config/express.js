import express from 'express';
import { engine as handlebars } from "express-handlebars"
import { indexRoute } from '../routes/index.js';
export default function setupExpress(app) {
    // app.use(express.urlencoded({ extended: true})); 

    //Setup the view engine
    app.engine('.hbs', handlebars({
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs'); 
    // app.engine('.hbs', engine());
    // app.set('view engine', 'handlebars');
    // app.set('views', './views');

    //Setup the static files
    app.use('/static', express.static('static'));

    app.use('/', indexRoute);

};