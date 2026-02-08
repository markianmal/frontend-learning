//метод дох** ху***

let username = window.prompt("Enter your username");

//метод дох** ху***

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let exstraChars = username.slice(1);
exstraChars = exstraChars.toLowerCase();
username = letter + exstraChars;

//а тепер норм тільки два рядка 

username = username.trim().charAt(0).toUpperCase() +
    username.trim().slice(1).toLocaleLowerCase();

console.log(username);