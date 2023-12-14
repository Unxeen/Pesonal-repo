const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const readline = require('readline');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const connects = [];
let users = 0;
const usersConnected = new Map();
let userID = null;

function addUser(socket) {
  users++;
  usersConnected.set(`/user${users}`, socket);
}

// Serve static files
app.use(express.static(path.join(__dirname, 'App')));

wss.on('connection', (socket, rq) => {
  connects.push(socket);
  addUser(socket);

  console.log('Client connected');

  socket.send('Hello everyone!');

  socket.on('message', (message) => {
    let socketIndex = findSocketIndex(socket);
    activeRL.setPrompt(`Received from user${socketIndex + 1}: `);
    activeRL.prompt();
    console.log(`${message}`);
    activeRL.setPrompt(`to ${userID} > `);
    activeRL.prompt();
  });

  socket.on('close', () => {
    console.log('Client disconnected!');
  });
});

function findSocketIndex(socket) {
  return connects.findIndex((ws) => {
    return ws === socket;
  });
}

function findSocket(userName) {
  return connects.find((socket, index) => {
    return `/user${index + 1}` === userName;
  });
}

function initiateMainInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'rl > ',
  });
}

const activeRL = initiateMainInterface();

activeRL.on('line', (input) => {
  if (input.startsWith('/user')) {
    userID = input;
    activeRL.setPrompt(`to ${input} > `);
    activeRL.prompt();
    return;
  } else if (userID) {
    findSocket(userID).send(input);
    activeRL.prompt();
    return;
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://localhost:3000');
});
