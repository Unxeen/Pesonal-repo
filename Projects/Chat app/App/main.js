
//initializing the WS server connection
const webSocket = new WebSocket('ws://192.168.1.107:3000')

//getting elements
const messageBox = document.querySelector('.messages-container')
const msgInput = document.querySelector('.message-input')
const sendButton = document.querySelector('.send-btn')


//Append server message function
function appendServerMessage(message){
    //source indicator
    const pointerLeft = document.createElement('div')
    pointerLeft.setAttribute('class', 'pointer-left')

    //message container
     const msgContainer = document.createElement('div');
     msgContainer.setAttribute('class', 'message')

     //message content
     const msgContent = document.createElement('p')
     msgContent.setAttribute('class', 'message-content')

     //assigning contenet
     msgContent.innerText = message;

     //appending message
     msgContainer.appendChild(msgContent);
     messageBox.appendChild(msgContainer)

     //appending indicator
    msgContainer.appendChild(pointerLeft)
}

//Append client message function
function appendClientMessage(message){
        //source indicator
        const pointerLeft = document.createElement('div')
        pointerLeft.setAttribute('class', 'pointer-right')
    
        //message container
         const msgContainer = document.createElement('div');
         msgContainer.setAttribute('class', 'message-client')
    
         //message content
         const msgContent = document.createElement('p')
         msgContent.setAttribute('class', 'message-content')
    
         //assigning contenet
         msgContent.innerText = message;
    
         //appending message
         msgContainer.appendChild(msgContent);
         messageBox.appendChild(msgContainer)
    
         //appending indicator
        msgContainer.appendChild(pointerLeft)
}


//send message fron client function
function sendMessageFromClient(){
    const message = msgInput.value
    webSocket.send(message)
    appendClientMessage(message)
    msgInput.value = '';
}

//dynamic client message sending



//On WS server connection events
webSocket.addEventListener('open', () => {
    console.log('Connexion successful!')
    // const userName = prompt('username: ');
    webSocket.addEventListener('message', (msg) => {
        appendServerMessage(msg.data);
    })

    sendButton.addEventListener('click', sendMessageFromClient);
    msgInput.addEventListener('keypress', (ev) => {
        if(ev.key === 'Enter') sendMessageFromClient();
    })

})