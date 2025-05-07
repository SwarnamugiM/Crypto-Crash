# Crypto Crash Game

The Crypto Crash Game is a multiplayer game where players place bets on cryptocurrency multipliers. The goal is to cash out before the crash point is reached, maximizing their returns.

## Backend
A real-time betting game backend simulating a **crash multiplier game** where players bet cryptocurrency and try to cash out before the multiplier crashes!

---

## 🚀 Tech Stack

- **Node.js + Express** – REST API server
- **MongoDB + Mongoose** – Database for players, rounds, transactions
- **Socket.IO** – Real-time game communication
- **Axios** – Live crypto price fetch (CoinGecko)
- **UUID** – Unique identifiers for transactions
- **dotenv** – Secure environment config

---

## 📁 Project Structure

```
crypto-crash-backend/
│
├── config/             # DB configuration
│   └── db.js
├── controllers/        # Request handlers
│   └── gameController.js
├── models/             # MongoDB models
│   ├── Player.js
│   ├── Round.js
│   └── Transaction.js
├── routes/             # API routing
│   └── apiRoutes.js
├── utils/              # Helpers
│   ├── cryptoUtils.js
│   └── crashAlgo.js
├── websocket/          # Socket.IO logic
│   └── socket.js
├── public/             # Static frontend files (index.html)
├── .env                # Environment variables
├── server.js           # Main entry point
├── seed.js             # (Optional) Sample data loader
├── package.json
└── README.md
```

---

## 🧠 Core Features

### ✅ User Wallet & Transactions
- Each player has a wallet with BTC and ETH balances.
- Transactions are logged on every bet.

### 🎯 Bet Placement
- API: `POST /api/bet`
- Validates balance, deducts crypto based on live USD value.

### 🔁 Crash Round Simulation
- Every 10 seconds, a new round starts.
- Server emits real-time `multiplierUpdate` events.
- Game ends when `multiplier` ≥ `crashPoint`.

### ⚡ WebSocket Events
- `roundStart` – New round details.
- `multiplierUpdate` – Multiplier increasing live.
- `roundEnd` – Round stops at crash point.
- `cashout` – (To be implemented): Manual cash out by player.

---

## 🛠️ MongoDB Collections

### ✅ players
- Holds player name & wallet (BTC, ETH).

### ✅ rounds
- Tracks each game round, crash point, and bets.

### ✅ transactions
- Logs bet and conversion details (USD → Crypto).

---

## 🔧 .env Example

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/cryptoCrash
COINGECKO_API=https://api.coingecko.com/api/v3/simple/price
```

---

## 🧪 Run the App

```bash
npm install
npm run dev
```

Visit: [http://localhost:5000](http://localhost:5000)  
MongoDB connected at `localhost:27017/cryptoCrash`

---

## 📊 Sample Players (MongoDB)

```json
[
  { "_id": "6819ccb1fb...", "name": "Alice", "wallet": { "BTC": 0.5, "ETH": 2 } },
  ...
]
```

---

## 🔮 Upcoming Features

- Cashout logic via Socket
- Player leaderboard
- JWT-based authentication
- Admin panel to monitor rounds and stats

---