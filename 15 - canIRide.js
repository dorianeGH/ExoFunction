// create the function canIRide that will receive 3 parameters: height, isAccompanied(boolean) and hasHeartCondition(boolean) that will return true or false.
// these are the conditions to ride:
// be at least 1.5 m, or 1.2 if accompanied
// have no heart condition

/*tu peux rider si 
  1. tu n'es pas sujet à des pb de coeur
    2. si ((tu fais 1.2 et que tu es accompagné) ou (que tu fait 1.5))
  3. sinon pas le droit*/

const canIRide = (height, isAccompanied, hasHeartCondition) => {
  if (!hasHeartCondition) {
    if ((height >= 1.2 && isAccompanied) || height >= 1.5) {
      return "yes you can";
    }
  }
  return "you cannot ride for your own safety";
};

console.log(canIRide(1.2, true, false));
