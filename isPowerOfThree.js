const isPowerOfThree = (num) => {
    let acc = 1;
    
    while (acc < num) {
        acc *= 3;
        if (acc > num) {
            return false;
        } else if (acc === num) {
            return true;
        }
    }
};
console.log(isPowerOfThree(90));