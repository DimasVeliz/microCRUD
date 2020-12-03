const express = require ( 'express');
const bodyParser = require ( 'body-parser');
const mongoose=require('mongoose')
const dotenv= require('dotenv')
const connectDB= require('./db')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors');


//load config
dotenv.config({path:'./config/config.env'})

//conecting to DataBase
connectDB()




const server = express();

//ading cors
server.use(cors());
// Configuring body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


//loggin all request we make in development mode :)
if (process.env.NODE_ENV=='development') {
    server.use(morgan('dev'))
}


server.use('/articles',require('./routes'));

module.exports= server;