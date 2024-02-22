const express = require("express")

var app = express();

var things = require('./Things.js')

app.use('/Things',things)

app.listen(3000)