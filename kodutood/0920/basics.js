/* Tutvuda uuesti tunni ajal omandatud ülesannetega ja koduste tööde kaustas võib teha sama basics.js, kus proovite läbi funktsioonid, arrow funktsioonid, shorthand arrow funktsioonid, string literals, object literals, spread syntax, map/filter + proovige läbi ka reduce funktsioon. */

// function
function findSquare(number) {
    return number**2;
}
// console.log(findSquare(5));

// arrow function
const findSquare2 = (number) => {
    return number**2;
}
// console.log(findSquare2(6));

// shorthand? arrow function
const findSquare3 = (number) => number**2;
// console.log(findSquare3(7));

// String literals
const name = "Aron";
// console.log(`Hello, ${name}`);

// Object literals


// Spread syntax


// Map
const numberArray = [0,1,2,3,4,5,6,7,8,9];
const squareArray = numberArray.map(element => element**2);
// console.log({squareArray});

// Filter
const evenArray = numberArray.filter(element => element % 2 == 0);
const oddArray = numberArray.filter(element => element % 2);
// console.log({evenArray}, {oddArray});

// Reduce