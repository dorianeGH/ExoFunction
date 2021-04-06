// create a canIGoToTheBank function that will receive 2 parameters: the day of the week and the time. The function must return true only if the bank is still open.
// keep in mind that the bank is open from Monday through Friday and from 10:00 until 18:00

const canIGoToTheBank = (day, time) => {
  if (day !== "Saturday" && day !== "Sunday") {
    if (10 <= time && time < 18) {
      //pas peut encadrer time, on doit décomposer
      return "you can go to the bank dear";
    }
  }
  return "dont go";
};
console.log(canIGoToTheBank("Sunday", 10));

/*if(condition1) {
  if (condition2) {
    si les 2 conditions sont vérifiées, alors action
  }
}
dans tous les autres cas, c'est non */
