/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let idx1, idx2, min = Infinity
 
     for(let idx in wordsDict) {
         let word = wordsDict[idx]
         if(word1 == word) idx1 = idx
         if(word2 == word) idx2 = idx
 
         let diff = Math.abs(idx1 - idx2)
 
         if(diff >= 0) {
             min = Math.min(min, diff)
         }
 
         if(min == 1) return min
     }
 
     return min
 };