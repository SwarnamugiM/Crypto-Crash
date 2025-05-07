const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
  roundId: String,
  crashPoint: Number,
  startTime: Date,
  bets: [{
    playerId: String,
    crypto: String,
    amount: Number,
    multiplier: Number,
    cashedOut: Boolean
  }]
});

module.exports = mongoose.model('Round', roundSchema);
