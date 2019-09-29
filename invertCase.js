const invertCase = (str) => {
    let newStr = '';
        for (let i = 0; i < str.length; i += 1) {
        if (str[i] === str[i].toUpperCase() ) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
        return newStr;
};
console.log(invertCase('Hello, World!'));