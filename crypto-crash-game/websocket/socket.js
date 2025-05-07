const { generateCrashPoint } = require('../utils/crashAlgo');
const Round = require('../models/Round');

let currentMultiplier = 1;
let timer;

const setupWebSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('Player connected');

    socket.on('cashout', (data) => {
      // handle player cashout
    });
  });

  setInterval(async () => {
    const { crashPoint } = generateCrashPoint(Date.now());
    let roundId = Date.now().toString();
    let startTime = new Date();

    const round = await Round.create({ roundId, crashPoint, startTime, bets: [] });

    io.emit('roundStart', { roundId, crashPoint });

    currentMultiplier = 1;
    timer = setInterval(() => {
      if (currentMultiplier >= crashPoint) {
        io.emit('roundEnd', { crashPoint });
        clearInterval(timer);
        return;
      }

      currentMultiplier += 0.05;
      io.emit('multiplierUpdate', { multiplier: currentMultiplier.toFixed(2) });
    }, 100);
  }, 10000);
};

module.exports = setupWebSocket;
