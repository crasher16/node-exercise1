// ----------------------------------------------------
// Exercise 1 – Node.js basic logic
// Developers: עידן דרור
// Description: This program checks whether a number
// is divisible by 2, 3, and 5, and prints:
// 1 → divisible by one of them
// 2 → divisible by two of them
// 3 → divisible by all three
// ----------------------------------------------------

// Define the number to test
const num = 123;

// Logical checks (true → 1, false → 0)
const divideTwo = Number(num % 2 === 0);
const divideThree = Number(num % 3 === 0);
const divideFive = Number(num % 5 === 0);

// ----------------------------------------------------
// Logical block: sum all the conditions
// The sum represents how many numbers divide `num`
// ----------------------------------------------------
const result = divideTwo + divideThree + divideFive;

// Output result
console.log(result);
