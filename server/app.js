const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const data = require('./data/data.json')

function fetchQuiz(){
    let out = []
    for(let i = 0; i <= 4; i++){
        let x = Math.floor(Math.random()*data.length)
        out.push(data[x])
    }
    return out
}

function addAnswer(arr){
    arr.forEach(el => {
        let letters = []
        for(let i = 0; i < el.word.length; i++){
            if(letters.indexOf(el.word[i]) < 0) letters.push(el.word[i])
        }
        el.letters = letters
        el.shown = el.letters[Math.floor(Math.random()*letters.length)]
    })
    return arr
}
let players = []
let quiz = []
let allClient = []

io.on('connection', (client) => {
    client.on('register', payload => {
        client.pengenal = payload
        allClient.push(client)
        players.push({
            nama: payload,
            score: 0
        })
        io.emit('player', players)
        client.emit('startGame', quiz)
    })
    client.on('resetGame', _=>{
        quiz = []
        io.emit('resetGame', quiz)
    })
    client.on('startGame', _=>{
        quiz = addAnswer(fetchQuiz())
        io.emit('startGame', quiz)
    })
    client.on('startRound', _=>{
        io.emit('startRound')
    })
    client.on('submitScore', payload=>{
        let index;
        for(let i = 0; i < players.length; i++){
            if(players[i].nama == payload.nama) index = i
        }
        players[index].score = payload.score
        io.emit('player', players)
    })
    client.on('disconnect', _ =>{
        let i = allClient.indexOf(client)
        let j = players.indexOf(client.pengenal)
        allClient.splice(i,1)
        players.splice(j,1)
        io.emit('player', players)
    })
});
server.listen(3000);