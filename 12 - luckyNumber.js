// create a function luckyNumber that will receive a number as a parameter and return if it is a lucky number or not. A lucky number must match these conditions:
// it is positive
// it is a multiple of 2 or 3
// it is not 15

const luckyNumber = (n) => {
  if (n !== 15 && n > 0 && (n % 2 === 0 || n % 3 === 0)) {
    return "yes it is a lucky number";
  } else {
    return `${n} is not a lucky number`;
  }
};

console.log(luckyNumber(15));
