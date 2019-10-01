const formattedTime = (n) => {
  let result = '';
  let hours = '';
  let min = '';
  console.log (Math.floor(hours));
  if (n % 60 === 0) {
    min = `:00`;
  } else if ((n % 60) > 9){
    min = `:${(Math.floor(n % 60))}`;
  } else if ((n % 60) < 9){ min = `:0${(Math.floor(n % 60))}`; } if ((n/60)>9){
    hours = `${(Math.floor(n / 60))}`;
  } else if ((n/60)<9){
    hours = `0${(Math.floor(n / 60))}`;
  }
  result = hours + min;
  return result;
}