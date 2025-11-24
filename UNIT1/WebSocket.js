const WebSocket = require('ws');
// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (socket) => {
  console.log('New client connected');

  // Send a welcome message
  socket.send('Welcome to WebSocket Server!');

  // Listen for messages from client
  socket.on('message', (message) => {
    console.log(`Received: ${message}`);
    socket.send(`Server received: ${message}`);
  });

// Handle disconnect
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8080');
// To test, you can use a WebSocket client or browser console:
// let socket = new WebSocket('ws://localhost:8080');
// socket.onmessage = (event) => console.log(event.data);
// socket.send('Hello Server!');
// Output way:
// 1. Run this script: node webSocket.js  
// 2. Open browser console and connect using WebSocket client code above
// 3. Observe messages exchanged between client and server  
// --- IGNORE ---