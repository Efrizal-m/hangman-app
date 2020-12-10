const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let messages = [
    {
        name: 'test',
        message: 'hello'
    }
]

io.on('connection', (client) => {
    client.emit('SendMsg', messages)
    client.on('connect', ()=>{
        console.log('client connected');
    })
    client.on('pushing', (data)=>{
        console.log(data);
        io.emit('parag', data)
    })
});
server.listen(3000);