// Node server which will handle socket io connections
const io = require('socket.io')(8000, {
    cors: {
      origin: '*',
    }
  });

const users = {};

// io.on is a event/instance of socket.io which is listen all the socket connections
io.on('connection',socket =>{
    // if any connection done then what to do
    // if any user joins . let other users connected to the server know:
    socket.on('new-user-joined',name=>{
        // give id for each user
        // console.log("New User",name);
        users[socket.id] = name;
        // msg deliver all users xyz user-joined
        socket.broadcast.emit('user-joined',name);
    });

    // if someone sends a msg broadcast it to the other people
    socket.on('send',message =>{
        socket.broadcast.emit('receive',{message: message, name: users[socket.id]})
    });

    // if someone leaves the chat let other s know
    socket.on('disconnect',message =>{
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    });
})