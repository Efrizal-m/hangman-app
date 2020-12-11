//set a function  to get random index of character
function randomIdx(i, min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let arr = Array.from({ length: i }, () => Math.floor(Math.random() * (max - min)) + min);
    return arr.sort();
}

//get random index of character
function MissingCharCount(word) {
    let missingIdx;
    if (word.length <= 5) {
        return missingIdx = [...new Set(randomIdx(3, 0, word.length))]
    } else if (word.length > 5 && word.length <= 7) {
        return missingIdx = [...new Set(randomIdx(5, 0, word.length))]
    } else if (word.length > 7) {
        return missingIdx = [...new Set(randomIdx(7, 0, word.length))]
    }
}

//store an array with missing character
function WordQuiz (word) {
    let character = word.split('')
    let idx = MissingCharCount(word)
    for (let i = 0; i < idx.length; i++) {
        character.forEach((c, j) => { if (j == idx[i]) character[j] = ''; });        
    }
    character = character.filter(el => {
        if(el != '') return el
    })
    return character
}

module.exports = WordQuiz