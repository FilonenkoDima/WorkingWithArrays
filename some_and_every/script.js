"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some((mov) => mov === -130));

const anyDeposit = movements.some((mov) => mov > 0);
console.log(anyDeposit);

// EVEERY
console.log(movements.every((mov) => mov > 0));

const account4 = {
  owner: "Oleg Shevchenko",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, // %
  pin: 4444,
};

console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
