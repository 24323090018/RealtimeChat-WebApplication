

const socket = io('http://localhost:8000');

// get dom elements in respective js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

// audio that will play on receiving msg
var audio = new Audio('ting.mp3');// create a function to append a msg new user joined
// function which will append to the container
const append = (message , position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position=='left'){
        audio.play();
    }
    
}



// this event accept by index.js ke new-user-joined function ko
// ask new user for his/her name and let the server know
const name = prompt("Enter your name to join");
socket.emit('new-user-joined',name);

// create a msg in chatbox somebody joined the chat
// if a new user joins,receivs his/her name from the server
socket.on('user-joined', name=>{
     append(`${name} joined the chat`,'right')
})

// for msg
// if server sends a msg , receive it
socket.on('receive', data=>{
    append(`${data.name}:${data.message} `,'left')
})

// if a user leaves the chat , append the info to the container
socket.on('left',name=>{
    append(`${name} left the chat`, 'right')
})


// when we send the msg 
// if the form gets submitted, send server the msg
form.addEventListener('submit',(e)=>{
    // don't reload the page
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value = ''
})
