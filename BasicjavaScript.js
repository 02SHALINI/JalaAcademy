//  This is a single-line comment

/*
    This is a multi-line comment
    You can write multiple lines here
*/

console.log("Comments Example");

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
};

console.log("Car Properties:");
for (let key in car) {
    console.log(key + ": " + car[key]);
}

const person = {
    firstname: "John",
    lastname: "Doe"
};

// Accessing using dot notation
console.log(person.firstname);

// Accessing using bracket notation
console.log(person["lastname"]);

// 5 Variable hoisting example
console.log(x); // Outputs: undefined, because of hoisting
var x = 10;
console.log(x); // Outputs: 10


"use strict";

function strictModeExample() {
    y = 5; // This will cause an error because 'y' is not declared
}

strictModeExample();


