const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index' , {
            flights: flights
        })
    })
}

function create(req, res) {
    // remove whitespace next to commas
    req.body.flightNumber = req.body.flightNumber.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    if (req.body.flightNumber) req.body.flightNumber = req.body.flightNumber.split(',');
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights/new');
    });
  }


function newFlight(req,res) {
    res.render('flights/new')
}

