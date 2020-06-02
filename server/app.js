var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var ingredientsRouter = require('./routes/ingredients');
var visionRouter = require('./routes/vision');
var dbConfig = require('./config/db')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/ingredients', ingredientsRouter);
app.use('/vision', visionRouter);

mongoose.connect(`mongodb+srv://${dbConfig.user}:${dbConfig.password}@puritycluster-uscoz.mongodb.net/purity?retryWrites=true&w=majority`, { 
useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = app;
