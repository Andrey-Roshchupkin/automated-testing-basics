// Create a car object, add a color property to it with the value equals 'black'

const car = {
  color: "black",
};

console.log(car); // { color: 'black' }

// Change the color property of the car object to 'green'
car.color = "green";

console.log(car); // { color: 'green' }

// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function () {
  console.log("Engine power is 200 hp");
};

car.power(); // Engine power is 200 hp

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
const warehouse = {
  pears: 0,
  apples: 0,
  addFruiits(pears, apples) {
    this.pears += pears;
    this.apples += apples;
    return [this.pears, this.apples];
  },
};

console.log(warehouse); // { pears: 0, apples: 0, addFruiits: [Function: addFruiits] }
warehouse.addFruiits(10, 10);
console.log(warehouse.addFruiits(3, 4)); // [ 13, 14 ]

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const savedName = "Andrei";
function isNameInTerminal(name) {
  name === savedName
    ? console.log("Hello, " + name)
    : console.log("There is no such name");
}

isNameInTerminal("Mike"); // There is no such name
isNameInTerminal("Andrei"); // Hello, Andrei
// Write a function for calculating the type of argument and type output to the console
function calcArgType(arg) {
  console.log(`Type of "${arg}" is ${typeof arg}`);
}

calcArgType(3453); // Type of "3453" is number
calcArgType(false); // Type of "false" is boolean
calcArgType("123"); // Type of "123" is string

// Write a function that determines whether a number is prime or not

function isPrimeNumber(number) {
  if (typeof number !== "number") {
    return console.log("Inputed value is not a number");
  }
  if (2 >= number || number >= Infinity || Math.trunc(number) !== number) {
    return console.log(`The number "${number}" is not prime`);
  }
  for (let i = 2; i <= number ** 0.5; i++) {
    if (number % i === 0) {
      return console.log(`The number "${number}" is not prime`);
    }
  }

  return console.log(`The number "${number}" is prime`);
}

isPrimeNumber("34"); // Inputed value is not a number
isPrimeNumber(Infinity); // The number "Infinity" is not prime
isPrimeNumber(0); // The number "0" is not prime
isPrimeNumber(120); // The number "120" is not prime
isPrimeNumber(809); // The number "809" is prime
isPrimeNumber(1.5); // The number "1.5" is not prime
isPrimeNumber(2); // The number "2" is not prime
