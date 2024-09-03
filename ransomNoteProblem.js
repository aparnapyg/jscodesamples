/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
   let map = {};

   for(const c of magazine){
    map[c] = c in map ? map[c] + 1 : 1
   }

   for(const c of ransomNote){
    if (!(c in map) || (map[c] < 1)) { return false; }
    map[c]--;
   }
   return true;
};

const ransomNote = 'aa';
const magazine = 'aba';

console.log(canConstruct(ransomNote, magazine));