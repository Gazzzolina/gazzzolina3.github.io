const reverse = (str) => {
    let result = '';
    const iter = (a, b) => {
        if (b < 0) {
            return result;
        }
        result = result + str[b];
        return iter ( str[b], b-1);
    }
    return iter(str, (str.length - 1)); 
    
}