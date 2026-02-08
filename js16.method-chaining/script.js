let username = window.prompt("Enter your username");

username = username.trim(" ");
let letter = username.charAt(0);
letter = letter.toUpperCase();
let exstraChars = username.slice(1);
exstraChars = exstraChars.toLowerCase();
username = letter + exstraChars;

console.log(username);