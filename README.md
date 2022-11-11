#RealtimeChat-Application 

In this article, we will be using Socket.io , to build a fullstack, real-time chat application .

This will be a great project to learn how to put together fullstack apps, and how to create an app where the backend can communicate with the frontend in real time.

Normally, using HTTP requests, the server cannot push data to the client in real time. But using Socket.io, the server is able to push real time information to the client about some events that happened on the server.

Here's what we'll be using to build this app:

Here's what we'll be using to build this app:

Frontend: HTML and CSS (A frontend JavaScript framework for building interactive applications)
Backend: Node JS ( NodeJS framework that allows us to easily create APIs and backends)
Realtime communication: Socket.io (see below!)

What is Socket.IO?

Socket.io is a JavaScript library that allows real-time communication between clients and servers. It's built on top of the Websockets API.  The most common use cases for Websockets and socket.io are chat applications or social media feeds in which a user's page receives messages or posts from other users without needing the user to refresh the page.

Socket.IO allows the server to push information to the client in real time, when events occur on the server.

For example, if you were playing a multiplayer game, an event could be your "friend" scoring a spectacular goal against you.

With Socket.IO, you'd know (almost) instantly about conceding a goal.

Without Socket.IO, the client would have to make multiple polling AJAX calls to verify that the event has occurred on the server. For example, the client could use JavaScript to check for an event on the server every 5 seconds.

Socket.IO means that the client doesn't have to make multiple polling AJAX calls to verify if some event has occurred on the server. Instead, the server sends the info to the client as soon as it gets it. Much better. 👌

So, Socket.IO allows us to easily build real time applications, such as chat apps and multiplayer games.
