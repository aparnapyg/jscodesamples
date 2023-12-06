/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.trim();
    words = words.split(' ');
    return words[words.length - 1].length;
};