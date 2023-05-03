// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const string = "ahb acb aeb aeeb adcb axeb";

const regex = /a.b/g;
console.log(string.match(regex)); // [ 'ahb', 'acb', 'aeb' ]

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const string2 = "2 + 3 223 2223";

const regex2 = /2\s\+\s3/;
console.log(string2.match(regex2)); // [ '2 + 3', index: 0, input: '2 + 3 223 2223', groups: undefined ]

// Get the day, month and year of the current date and output it to the console separately
const date = new Date();
console.log(date.getDay()); // 3
console.log(date.getMonth()); // 4 (0-11)
console.log(date.getFullYear()); //2023
