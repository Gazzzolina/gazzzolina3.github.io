const sumSquareDifference = (n) => {
  let result = 0;
  let sumSquare = 0;
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sumSquare = sumSquare + Math.pow(n - i, 2);
    sum += i;
  }

  result = Math.pow(sum, 2) - sumSquare;

  return result;
};