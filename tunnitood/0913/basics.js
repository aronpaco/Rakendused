// var . this määrab seda klassi
// const . 
// let . 

const array = ["Mati", "Kati", "Andres"];
function findMyIndex(array, element) {
    return array.indexOf(element);
}
// console.log(findMyIndex(array, "Andres"));

function findSum(liidetav1, liidetav2) {
    return liidetav1 + liidetav2;
}
// console.log(findSum(2, 3));

const arrowFunction = (n1, n2) => {
    return n1 + n2
}
// console.log("arrowFunction: " + arrowFunction(5, 6));

const arrowFunction2 = (n1, n2) => /* return */ n1 + n2;
// console.log("arrowFunction2: " + arrowFunction2(11,14));


// Nested

function addNumbers(num1, num2) {
    return function(num2) {
        return num1 + num2;
    }
}
// console.log(addNumbers(3)(4));

const addNumbers2 = (num1) => (num2) => num1 + num2;
// console.log(addNumbers2(3)(4));


// Arrow Function printida "Hello (nimi)", kasutada string literals

const personName = "Aron";

const name = `Name is ${personName}`;
// ${variableName}
// console.log(name);

const helloName = (personName) => `Hello ${personName}`;
// console.log({personName})


// map/filter/reduce?

const numberArray = [1, 2, 3, 4, 5];

const newArray = numberArray.map(element => element + 5)
// .map(() => {})

// Filter

const filteredArray = numberArray.filter(element => element < 4) // true-false logic
// console.log({numberArray, filteredArray});
// console.log(1 < 4)


const names = ['Juku', 'Marianne', 'Jaanus']

const data = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name.toLowerCase()}@company.com`,
        address: `${name} Street 55`,
        username: name.split("").reverse().join("")
    }
})
console.log(data[0]);

// Lisan pikkuse

const newJuku = {
    ...data[0],
    height: 175
}
console.log(newJuku)

const newerJuku = {
    ...newJuku,
    age: 50
}
console.log(newerJuku)


