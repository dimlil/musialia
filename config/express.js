import express from 'express';
export default function setupExpress(app) {
    // app.use(express.urlencoded({ extended: true})); 

    //Setup the static files
    app.use('/static', express.static('static'))

};