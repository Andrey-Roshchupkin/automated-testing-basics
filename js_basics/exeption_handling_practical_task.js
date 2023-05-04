// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use.

try {
  console.log(a);
  let a = 3;
} catch (err) {
  console.log(err.message + ". Let must be declared before use");
} // Cannot access 'a' before initialization. Let must be declared before use

// When running 1/0, the error 'cannot be divided by zero'

try {
  1 / 0; // infinity
  throw new Error("Cannot be divided by zero");
} catch (err) {
  console.log(err.message);
} // Cannot be divided by zero
