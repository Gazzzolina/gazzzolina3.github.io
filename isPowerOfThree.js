const isPowerOfThree = (num) => {
    let i = 1;
    
    while (i < num) {
        i *= 3;
        if (i > num) {
            return false;
        } else if (i === num) {
            return true;
        }
    }
};