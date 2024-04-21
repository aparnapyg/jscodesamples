/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let charToWordMap = new Map();
    let wordToCharMap = new Map();

    for(let i = 0; i < pattern.length; i++){
        if(!charToWordMap.has(pattern[i])){
            charToWordMap.set(pattern[i], s.split(' ')[i]);
        }
    }
    
    console.log('character to word map:', charToWordMap);

    for(let i = 0; i < pattern.length; i++){
        if(!wordToCharMap.has(s.split(' ')[i])){
            wordToCharMap.set(s.split(' ')[i], pattern[i]);
        }
    }

    for(let i = 0; i < pattern.length; i++){
        console.log('pattern character:', pattern[i]);
        console.log('string map:', s.split(' ')[i]);
        if ((charToWordMap.get(pattern[i]) !== s.split(' ')[i])){
            return false;
        }
    }
    return true;
    
};

// const pattern = 'abba';
// const s = 'dog cat cat dog';

const pattern = 'abba';
const s = 'dog dog dog dog';

// const s = 'dog cat cat fish';

console.log(wordPattern(pattern, s));