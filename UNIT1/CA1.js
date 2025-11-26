// develop a real time user presence system (online-offline indicators)
const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let users = {};
let socketToUser = {};

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
  socket.on("join", name => {
    if (!name) return;
    users[name] = "online";
    socketToUser[socket.id] = name;
    io.emit("presence", users);
  });

  socket.on("disconnect", () => {
    const name = socketToUser[socket.id];
    if (name) {
      users[name] = "offline";
      delete socketToUser[socket.id];
      io.emit("presence", users);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

