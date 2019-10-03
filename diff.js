const diff = (a, b) => {
  let big = 0;
  let small = 0;
  let res1 = 0;
  let res2 = 0;
  
  if (a >= b) {
  big = a;
  small = b;
} else {
  big = b;
  small = a;
}

res1 = big - small;
res2 = 360 - big + small;

if (res1 < res2)
  return res1;
  return res2;
}