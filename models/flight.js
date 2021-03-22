const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["DFW", "DEN", "AUS", "SAN", "LAX"]
  },
  arrival: {
    type: Date
  } 
})

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  departs: {
    type: Date
  },
  airport: {
    type: String,
    enum: ["DFW", "DEN", "AUS", "SAN", "LAX"],
    default: "DFW"
  },
  destinations: [destinationSchema]
});

module.exports = mongoose.model("Flight", flightSchema);