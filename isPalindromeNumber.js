var isPalindrome = function(x) {
    let reversedNumber = 0;
    let remainder = 0;
    let originalNumber;
    originalNumber = x;
    while (x>0){
      remainder = x % 10;
      x = parseInt(x/10);
      reversedNumber = reversedNumber*10+remainder;
    }
    if (originalNumber===reversedNumber) { return true; }
    else { return false; }
};

console.log('print value:', isPalindrome(121));