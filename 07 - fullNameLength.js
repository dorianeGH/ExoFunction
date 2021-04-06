// create a function fullNameLength that receives the name and surname as parameters
//   and returns the length of the full name,
//   counting with the extra space that separates
//   both names

const fullNameLength = (name, surname) => {
  //return name.length + surname.length;
  const fullname = `${name} ${surname}`; // pas de guillemets à name et surname
  //console.log(fullname);
  return fullname.length;
};

console.log(fullNameLength("bob", "smith"));
