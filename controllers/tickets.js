const Ticket = require("../models/ticket");

module.exports = {
  create,
  new: newTicket
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