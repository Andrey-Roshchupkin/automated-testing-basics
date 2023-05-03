// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "The Godfather Part II",
  "12 Angry Men",
];

movies.forEach((movie) => console.log(movie)); //The Shawshank Redemption The Godfather The Dark Knight The Godfather Part II 12 Angry Men

// Given an array of car manufacturers, convert the array to a string and back to an array
const carManufactures = ["Škoda", "Tatra", "Avia", "Kaipan", "MTX", "Praga"];

const strCarManufacturesing = carManufactures.join(" ");
console.log(strCarManufacturesing); // Škoda Tatra Avia Kaipan MTX Praga

const arrCarManufactures = strCarManufacturesing.split(" ");
console.log(arrCarManufactures); // [ 'Škoda', 'Tatra', 'Avia', 'Kaipan', 'MTX', 'Praga' ]

// Given an array of the names of your friends, add the words hello to each element of the array
let friends = ["Dmitriy", "Antony", "Michael", "Alex"];

friends = friends.map((friend) => "Hello, " + friend);
console.log(friends); // [ 'Hello, Dmitriy', 'Hello, Antony', 'Hello, Michael', 'Hello, Alex' ]

// Convert numeric array to Boolean
const numbers = [-10, 0, 1, 125, 1.5];

const booleans = numbers.map((number) => Boolean(number));
console.log(booleans); // [ true, false, true, true, true ]

// Sort the array [1,6,7,8,3,4,5,6] in descending order
const arrToBeSorted = [1, 6, 7, 8, 3, 4, 5, 6];

arrToBeSorted.sort((a, b) => b - a);
console.log(arrToBeSorted); // [ 8, 7, 6, 6, 5, 4, 3, 1 ]

// Filter array [1,6,7,8,3,4,5,6] by value> 3
const arrToBeFiltered = [1, 6, 7, 8, 3, 4, 5, 6];

const filteredArr = arrToBeFiltered.filter((number) => number > 3);
console.log(filteredArr); // [ 6, 7, 8, 4, 5, 6 ]

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function inputElementOfArray(arr, number) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === number)
      return console.log(
        "The index of an array element equal to a number is ",
        idx
      );
  }
  return console.log("No such number in the array");
}

const arr = [-123, 24, 1, 3, 4, 7, 7, -7, 1.5];

inputElementOfArray(arr, 123); // No such number in the array
inputElementOfArray(arr, 7); // The index of an array element equal to a number is  5

// Implement a loop that will print the number 'a' until it is less than 10
let a = 0;
while (a < 10) {
  console.log(a);
  a++;
} // 0 1 2 3 4 5 6 7 8 9

// Implement a loop that prints prime numbers to the console
function isPrime(num) {
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let current = 2;
let finish = 10;

while (current < finish) {
  if (isPrime(current)) console.log(current, "is prime");
  current++;
} // 2 is prime, 3 is prime, 5 is prime, 7 is prime

// Implement a loop that prints odd numbers to the console

for (let idx = 0; idx < arr.length; idx++) {
  if (Math.abs(arr[idx]) % 2 === 1) console.log(arr[idx]);
} // -123 1 3 7 7 -7
