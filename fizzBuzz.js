const fizzBuzz = (begin, end) => {
  const word = (num) => {
    if (((num % 3) === 0) && ((num % 5) === 0)) {
      return 'FizzBuzz';
    }
    else if ((num % 3) === 0) {
      return 'Fizz';
    }
    else if ((num % 5) === 0) {
      return 'Buzz';
    }
    else return num;
  }
  let start = begin;
  for (; start <= end; start += 1) {
    console.log(word(start));
  }
}