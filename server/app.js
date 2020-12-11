const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const data = require('./data/data.json')
const PORT = 3000
const WordQuiz = require('./helpers/wordQuiz')

function fetchQuiz(){
    let out = []
    for(let i = 0; i < 1; i++){
        let x = Math.floor(Math.random()*data.length)
        out.push(data[x])
    }
    return out
}


function addAnswer(arr){
    let randomSum = Math.ceil(Math.random()*2)
    arr.forEach(el => {
        let letters = []
        let shown = []
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
    io.emit('player', players)
    client.on('register', payload => {
        client.pengenal = payload
        allClient.push(client)
        players.push({
            nama: payload,
            score: 0
        })
        io.emit('player', players)
    })
    client.on('resetGame', _=>{
        quiz = []
        players = []
        io.emit('resetGame', quiz)
    })
    client.on('startGame', _=>{
        quiz = fetchQuiz()
        quiz[0].shown = WordQuiz(quiz[0].word)
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
        quiz = []
        quiz = addAnswer(fetchQuiz())
        io.emit('startGame', quiz)
        if(payload.score === 30) {
            io.emit('finishGame', {
                nama: payload.nama
            })
        }
    })
    client.on('disconnect', _ =>{
        let i = allClient.indexOf(client)
        let j;
        players.forEach((el, i) =>{
            if(el.nama == client.pengenal) j = i
        })
        allClient.splice(i,1)
        if(j != -1){
            players.splice(j,1)
        }
        console.log(j);
        io.emit('player', players)
    })
});

server.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
})