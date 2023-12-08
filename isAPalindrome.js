/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();

    //if we reverse the string and it's equal to the newstr then we return true
    //if not, then we return false.
    return newStr.split("").reverse().join("") === newStr;
};