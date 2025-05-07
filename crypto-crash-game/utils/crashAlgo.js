const crypto = require('crypto');

const generateCrashPoint = (roundNumber) => {
  const seed = crypto.randomBytes(16).toString('hex');
  const hash = crypto.createHash('sha256').update(seed + roundNumber).digest('hex');
  const crashPoint = (parseInt(hash.slice(0, 8), 16) % 10000) / 100 + 1;
  return { crashPoint: parseFloat(crashPoint.toFixed(2)), seed };
};

module.exports = { generateCrashPoint };
