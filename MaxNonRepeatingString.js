 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    maxLengthOfString = 0;

    while (end < s.length){
        while (start < s.length) {
            lengthOfString = getLengthOfSubstrWithNoRepeatingChars(s.substring(start, end));
            if (lengthOfString > maxLengthOfString) { maxLengthOfString = lengthOfString; }
            start++;
        }
        end++;
    }
    return maxLengthOfString;
};

function getLengthOfSubstrWithNoRepeatingChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length; j++){
            if (str.charAt(i) === str.charAt(j))  { return true; }
        }
    }
    return str.length;
}

const s = 'abcabcbb';

console.log(lengthOfLongestSubstring(s));