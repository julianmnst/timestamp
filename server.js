var express = require("express")
var app = express()
var moment = require("moment")
var routes = require("./routes.js")

app.get('/', routes.home)
app.set('view engine', 'ejs');

app.get('/:date', routes.checkDate)

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})