import bodyParser from 'body-parser';
import config from './config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './REST/routes';

const express = require('express');
const continents = require('./continents').continents;
const config = require('./config').config; 
const app = express();



app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (request, response) => {
    response.render(__dirname + '/index.html', {subject: 'Technologie webowe w aplikacjach Internetu 34289',chart: chart}
 )

 router.get('/api/user/:id', async (request, response, next) => {
    console.log(request.params.id);
    response.status(200).send({});
 });
 

app.listen(config.port, function () {
   console.info(`Server is running at port 3000`);
});
});

