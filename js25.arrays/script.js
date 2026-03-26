
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

