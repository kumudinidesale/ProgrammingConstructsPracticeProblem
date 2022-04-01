const isPowerOfTwo = num => {
    // '1' is the only odd number which is a power of 2(2^0)
    if(num == 1){
       return true;
    };
    // all other odd numbers are not powers of 2
    if(num % 2 !== 0){
       return false;
    }
    // recursive function call
    return isPowerOfTwo(num / 2);
 }
 console.log(isPowerOfTwo(64));
 console.log(isPowerOfTwo(83));