
const num = [1, 2, 3, 4, 5];
const squares = num.map(square); 
const cubes = num.map(cube); 

console.log(squares);
console.log(cubes);

function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}

const students = ["Markian", "Nazar", "Max", "Pavlo", "Volodia"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(LowerCase);

console.log(studentsUpper);
console.log(studentsLower); 

function upperCase(element) {
    return element.toUpperCase();
}

function LowerCase(element) {
    return element.toLowerCase();
}