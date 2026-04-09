//(..rest) opposite of spread operator

function sum(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 5, 22, 8, 20, 8,)

console.log(`Your total is $${total}`);

function getaverage(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const totalgrade = getaverage(52, 55, 61, 62, 73, 75, 85 ,90)

console.log(`Your average grade is ${totalgrade} / 100`);