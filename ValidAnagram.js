/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    for(let i = 0; i < s.length; i++){
        if(t.indexOf(s[i]) === -1) { return false; }
    }
    return true;
};
// const s = 'car';
// const t = 'rat';
const s = 'anagram';
const t = 'nagaram';
console.log(isAnagram(s, t));