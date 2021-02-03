require('dotenv').config()
var app = require('express')(),
axios = require('axios'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/voted', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
