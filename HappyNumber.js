 /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let numberSet = new Set();
    while (n !== 1 && !numberSet.has(n)){
        numberSet.add(n);
        n = getNextNumber(n);
    }
    return n === 1 ? true : false;
};

let getNextNumber = function(num){
    let totalSum = 0;
    let digit = 0;
    while(num > 0){
      digit = num % 10;
      totalSum += digit * digit;
      num = Math.floor(num/10);
   }
   return totalSum;
}

n = 1
console.log(isHappy(1));