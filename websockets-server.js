var WebSocketServer = require('ws').Server, 
  wss = new WebSocketServer({port: 8080});

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    wss.broadcast(message);
  });
  ws.send('something');
});

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};

console.log('Server is ready and listening...');