// let question = [
//     {
//         "word": "culture",
//         "desc": "the arts and other manifestations of human intellectual achievement regarded collectively."
//     },
//     {
//         "word": "unique",
//         "desc": "being the only one of its kind; unlike anything else."
//     },
//     {
//         "word": "compassion",
//         "desc": "sympathetic pity and concern for the sufferings or misfortunes of others."
//     },
//     {
//         "word": "growth",
//         "desc": "the process of increasing in physical size."
//     },
//     {
//         "word": "mindset",
//         "desc": "the established set of attitudes held by someone."
//     }]

// let player = [    
//         {
//             "name": "a",
//             "score": 0
//         },
//         {
//             "name": "b",
//             "score": 0
//         }]

//checkAnswer
function WordMatching(key, answer) {
    if ((key.join()).toLowerCase() === (answer.join()).toLowerCase()) {
        return true
    } else {
        return false
    }
}

//calculate point
// let answer = ['p1answer','p2answer']
//key = question.word
function calculateScore (player, answer) {
    for (let i = 0; i < player.length; i++) {
        if (WordMatching(key, answer[i])) {
            player[i].score++            
        }
    }
}

//delaying times
let round = 5;
for (let i = 0; i < round; i++) {
        this.count = 10
        let countdown = setInterval(() => {
          this.count -= 1
          if (this.count === 0) {
            clearInterval(countdown)
            // new question
            //-------------------------
            //checkAnswer and calculate point
            calculateScore(player,answer)
          }
    }, 10000)
}