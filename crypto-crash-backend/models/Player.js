const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  wallet: {
    BTC: { type: Number, default: 0 },
    ETH: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model('Player', playerSchema);
