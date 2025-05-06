const axios = require('axios');

let priceCache = {};
let lastFetch = 0;

const fetchCryptoPrice = async (symbol) => {
  const now = Date.now();
  if (now - lastFetch < 10000 && priceCache[symbol]) return priceCache[symbol];

  const url = `${process.env.COINGECKO_API}?ids=${symbol.toLowerCase()}&vs_currencies=usd`;
  const response = await axios.get(url);
  const price = response.data[symbol.toLowerCase()].usd;

  priceCache[symbol] = price;
  lastFetch = now;
  return price;
};

module.exports = { fetchCryptoPrice };
