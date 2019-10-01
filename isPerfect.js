const isPerfect = (num) => {
  let result = 1;

  for (let i = 2; i < num; i++) {
    let digit = num / i;
    if ((digit ^ 0) != digit) {
      digit = 0;
    }

    result += digit;
  }

  if (result === num) {
    return true;
  }

  return false;
};