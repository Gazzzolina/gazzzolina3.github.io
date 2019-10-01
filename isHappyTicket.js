const length = str => str.length;
const substr = (str, start, len) => str.substr(start, len);

const sumDigits = (numberString) => {
  let sum = 0;
  for (let i = 0; i < length(numberString); i += 1) {
    sum += Number(numberString[i]);
  }
  return sum;
};

const isHappyTicket = (number) => {
  const numberString = String(number);

  const left = substr(numberString, 0, 3);
  const right = substr(numberString, 3);

  return sumDigits(left) === sumDigits(right);
};