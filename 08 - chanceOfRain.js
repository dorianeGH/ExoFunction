// create a function chanceOfRain, that will return the probability of rain in percentage, based on a random number received from Math.random() method.

const chanceOfRain = (n) => {
  return (Math.random() * 100).toFixed(2) + "%";
};

//(Math.round(number * 100) / 100).toFixed(2);
console.log(chanceOfRain());
