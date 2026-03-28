
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

const dates = ["24-10-2007", "22-8-2008"];
const redated = dates.map(redate);

console.log(dates);
console.log(redated);

function redate(element) {
    const parts = element.split("-")
    return `${parts[1]}/${parts[0]}/${parts[2]}`;
}








