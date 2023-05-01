const strings = [
  "",
  "0",
  "1",
  "123",
  "-1",
  "0b101",
  "abc",
  "null",
  "true",
  "false",
  "undefined",
  "NaN",
];
const booleans = [true, false];
const numbers = [-1, 0, 1, 123, -123, 0.333];

// Perform addition of various types (string + boolean, string + number, number + boolean)
operationsWithValuesOfArrays(strings, booleans, "+");
operationsWithValuesOfArrays(strings, numbers, "+");
operationsWithValuesOfArrays(numbers, booleans, "+");

// Perform multiplication of various types (string * boolean, string * number, number * boolean)
operationsWithValuesOfArrays(strings, booleans, "*");
operationsWithValuesOfArrays(strings, numbers, "*");
operationsWithValuesOfArrays(numbers, booleans, "*");

// Divide different types (string / boolean, string / number, number / Boolean)
operationsWithValuesOfArrays(strings, booleans, "/");
operationsWithValuesOfArrays(strings, numbers, "/");
operationsWithValuesOfArrays(numbers, booleans, "/");

// Perform explicit conversion (number, string, boolean)
// Convert to Number Explicitly
let result;

// string to number
result = Number("324");
console.log(result); // 324

result = Number("324e-1");
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

// Convert to String Explicitly
//number to string
result = String(324);
console.log(result); // "324"

result = String(2 + 4);
console.log(result); // "6"

//Boolean to string
result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// Convert to Boolean Explicitly
result = Boolean("");
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(324);
console.log(result); // true

result = Boolean("hello");
console.log(result); // true

result = Boolean(" ");
console.log(result); // true

// Helper functions
function operationsWithValuesOfArrays(arr, arr2, operand) {
  arr.forEach((value) => {
    arr2.forEach((value2) => {
      let result = calculate(value, value2, operand);
      console.log(`First value is "${value}" it's type is "${typeof value}".
Second value is "${value2}" it's type is "${typeof value2}".
"${value}" ${operand} "${value2}" equals to "${result}" which type is "${typeof result}" 
        `);
    });
  });
}

function calculate(val, val2, operand) {
  switch (operand) {
    case "+":
      return val + val2;
    case "*":
      return val * val2;
    case "/":
      return val / val2;
  }
}
