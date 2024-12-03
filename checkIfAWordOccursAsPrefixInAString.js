/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let indexOfWord = 0;

    for(let word of sentence.split(' ')){
        if(word.startsWith(searchWord)){ return indexOfWord+1 }
        indexOfWord++
    }
    return -1;
};