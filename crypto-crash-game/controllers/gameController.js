const { fetchCryptoPrice } = require('../utils/cryptoUtils');
const { v4: uuidv4 } = require('uuid');
const Player = require('../models/Player');
const Transaction = require('../models/Transaction');

exports.placeBet = async (req, res) => {
  try {
    const { playerId, usdAmount, currency } = req.body;

    if (!playerId || !usdAmount || !currency) {
      return res.status(400).json({ msg: 'Missing fields' });
    }

    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).json({ msg: 'Player not found' });
    }

    const price = await fetchCryptoPrice(currency);
    const cryptoAmount = usdAmount / price;

    if (player.wallet[currency] < cryptoAmount) {
      return res.status(400).json({ msg: 'Insufficient balance' });
    }

    player.wallet[currency] -= cryptoAmount;
    await player.save();

    await Transaction.create({
      playerId,
      usdAmount,
      cryptoAmount,
      currency,
      transactionType: 'bet',
      transactionHash: uuidv4(),
      priceAtTime: price,
      timestamp: new Date(),
    });

    res.json({ msg: 'Bet placed', cryptoAmount });
  } catch (error) {
    console.error('Bet error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};
