// create a canIRetire function that will receive 3 parameters: age, gender and years of contribution and will return true or false.
// keep in mind that the minimum age for women to retire is 60 years and men 65 years. in both cases you have to have at least 30 years of contribution.

/*tu peux  aller à la retraite si 
1. tes années de contribution >= 30ans
    2.si ((tu es une femme et que tu as as 60) ou (si tu es un homme de 65 ))
3. sinon dans tous les cas non*/

const canIRetire = (age, gender, contribution) => {
  if (contribution >= 30) {
    if ((gender = "female" && age >= 60) || (gender = "male" && age >= 65)) {
      return "you are free to go";
    }
  }
  return "unfortunately not yet";
};

console.log(canIRetire(40, "female", 31));

//l'ordre des parametres n'importent pas
