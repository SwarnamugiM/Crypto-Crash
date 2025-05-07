const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/apiRoutes');
const setupWebSocket = require('./websocket/socket');
const path = require('path'); // ✅ Add this line

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

setupWebSocket(io);

app.use(cors());
app.use(express.json());

// ✅ Serve static HTML/CSS/JS files
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API routes
app.use('/api', apiRoutes);

server.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
