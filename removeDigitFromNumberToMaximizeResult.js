/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let maxNumber = 0n;
    
    for(let i = 0; i < number.length; i++){
        if(number.charAt(i) === digit) {
            numberString = number.substring(0, i) + number.substring(i+1)
            maxNumber = BigInt(numberString) > maxNumber ? BigInt(numberString) : maxNumber;
        }
    }
    return maxNumber.toString()
};