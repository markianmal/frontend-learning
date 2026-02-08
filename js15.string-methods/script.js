const fullName = "Markian Maletskyi";

/*let firstName = fullName.slice(0, 7);//
let lastName = fullName.slice(8, 17); //or just (8) no need for 17
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-5); // last 5 characters

console.log(firstChar);
console.log(lastChar);
*/

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
//console.log(lastName);
