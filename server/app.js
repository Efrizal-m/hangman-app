const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let players = []
let quiz = ['kanban','todo','ecommerce']
let allClient = []

io.on('connection', (client) => {
    client.on('register', payload => {
        client.pengenal = payload
        allClient.push(client)
        players.push(payload)
    })
    client.on('resetGame', _=>{
        quiz = []
        io.emit('resetGame', quiz)
    })
    client.on('startGame', _=>{
        // panggil function isi quiz
        io.emit('startGame', quiz)
    })
    client.on('disconnect', _ =>{
        let i = allClient.indexOf(client)
        let j = players.indexOf(client.pengenal)
        allClient.splice(i,1)
        io.emit('player', players)
    })
});
server.listen(3000);