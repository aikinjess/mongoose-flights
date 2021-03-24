const Ticket = require("../models/ticket");

module.exports = {
  create,
  new: newTicket,
  delete: deleteTicket

};

function newTicket(req, res) {
  res.render("tickets/new", { id: req.params.id });
}

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function(err, tickets) {
    res.redirect(`/flights/${req.params.id}`);
  });
}

function deleteTicket (req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
      flight.tickets.id(req.params.tid).remove()
      flight.save( err => {
          if(err) console.log(err);
          res.redirect(`/flights/${flight._id}`);
      })
  })
}
