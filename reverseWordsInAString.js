/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strTempArray = s.split(' ');
    let reversedStr = '';;
    for(let i = strTempArray.length - 1; i >= 0; i--){
      if(strTempArray[i]) { 
      reversedStr += (reversedStr ? " " : "") + strTempArray[i]; 
      }
    }
    return reversedStr;
}

// s = "a good   example"
// s = "the sky is blue"
// s = "  hello world "
;
