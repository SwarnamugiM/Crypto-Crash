# Crypto Crash Game

The Crypto Crash Game is a multiplayer game where players place bets on cryptocurrency multipliers. The goal is to cash out before the crash point is reached, maximizing their returns.

## Backend

- Built with Node.js, Express.js, MongoDB, and Socket.IO.
- Players can place bets, view the crash multiplier, and cash out during a round.
- Backend handles player wallets, transaction history, and game round management.

## Frontend

- Built with HTML, CSS, and JavaScript.
- Provides a real-time interface to interact with the game using WebSocket.
- Displays round details, allows players to place bets, and cash out.

## Installation

1. Clone the repository:
    ```
    git clone <repo-url>
    ```

2. Backend Setup:
    - Install dependencies with `npm install`.
    - Set up MongoDB connection and API keys in `.env` file.
    - Run the server with `npm start`.

3. Frontend Setup:
    - Open `websocket-client/index.html` in your browser.
    - Connect to the backend WebSocket server.

## Contributing

Feel free to contribute by creating issues or submitting pull requests.

