var moment = require("moment")

// Index

exports.home = function(req, res){
  res.render('index')
}

//If Date

exports.checkDate = function(req,res) {
  var myDate;
  if(/^\d{8,}$/.test(req.params.date)) {
    myDate = moment(req.params.date, "X");
  } else {
    myDate = moment(req.params.date, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


}