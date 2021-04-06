// create the function podium that will receive a parameter with the podium position and return a different string according to the position:
// first place: 'gold'
// second place: 'silver'
// third place: 'bronze'
// other places: 'keep trying!

/*si ta position  */

const podium = (position) => {
  if (position === 1) {
    return "you are the best";
  } else if (position === 2) {
    return "silver is almost gold";
  } else if (position === 3) {
    return "too much time in sun";
  } else {
    return "keep trying!";
  }
};

console.log(podium(3));
console.log(podium(2));
console.log(podium(1));
console.log(podium(4));
console.log(podium(5));
