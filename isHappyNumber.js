const length = str => str.length;
const sumDigits = (num) => {
  const numStr = String(num);
  let sum = 0;
  for (let i = 0; i < length(numStr); i += 1) {
    const digit = Number(numStr[i]);
    sum += digit * digit;
  }
  return sum;
};

isHappyNumber = (num) => {
  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};