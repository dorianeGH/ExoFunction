// create a function largerThan that will receive 2 numbers as parameters and return the largest number only

const largerThan = (a, b) => {
  /* if (a > b) {
    return a;
  }
  return b;
};*/
  return a > b ? a : b; // dans une F, si en ternaire, mettre return en premier
};

console.log(largerThan(500, 130));
