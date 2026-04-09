//(..rest) opposite of spread operator

function openFridge(...foods) {
    console.log(foods)
}

function getfood(...foods) {
    return foods;
}

const food1 = "pizza" 
const food2 = "hamburger" 
const food3 = "sushi" 
const food4 = "apple" 

openFridge(food1, food2, food3, food4);

const foods = getfood(food1, food2, food3, food4)
console.log(foods)