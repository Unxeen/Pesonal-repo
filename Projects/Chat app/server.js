const WebSocket = require('ws');
const readline = require('readline');
const { ServerResponse } = require('http');

//Initialising the WS server
const server = new WebSocket.Server({ port: 3000 });



//Initialising the readline interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: 'rl > '
// })


//////////////////////////////////////////////////////////////
const connects = [];
let users = 0;
const usersConnected = new Map();


function addUser(socket){
  users++;
  usersConnected.set(`/user${users}`, socket)
}

//On user connexion
server.on('connection', (socket, rq) => {
  //store each user in the connects array
  connects.push(socket);

  //store each user in the 'usersConnected' Map
  addUser(socket);

  console.log('Client connected');
  // console.log(rq.socket.address());
  // console.log(server.clients);
  // console.log(connects.length);



  socket.send('Hello everyone!')

  //When message is received
  socket.on('message', (message) => {
    let socketIndex = findSocketIndex(socket);
    activeRL.setPrompt(`Received from user${socketIndex + 1}: `)
    activeRL.prompt();
    console.log(`${message}`);
    activeRL.setPrompt(`to ${userID} > `)
    activeRL.prompt();
  });


  //When user terminates the connection
  socket.on('close', () => {
    console.log('Client disconnected!')
  })
});
//////////////////////////////////////////////////////////////






//used to find socket index to display when receiving msg
function findSocketIndex(socket){
  return connects.findIndex((ws) => {
    return ws == socket
  })
}

//find specific socket in connects[] based on rl input
function findSocket(userName){
  return connects.find((socket, index) => {
    return `/user${index + 1}` === userName;
  })
}


//start main interface function
function initiateMainInterface(){
  return readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'rl > '
})
}

// Storing active interface
const activeRL = initiateMainInterface()

//storing userID
let userID = null;

activeRL.on('line', (input) => {

  if (input.startsWith('/user')) {

    userID = input
    activeRL.setPrompt(`to ${input} > `);
    activeRL.prompt();
    return;

    } else if(userID){

      findSocket(userID).send(input);
      activeRL.prompt();
      return;

    }

  })