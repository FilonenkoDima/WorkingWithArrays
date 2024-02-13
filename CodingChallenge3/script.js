"use strict";

const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  const averageHumanAge = ages
    .map((age) => {
      if (age <= 2) return 2 * age;
      else return 16 + age * 4;
    })
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return averageHumanAge;
};

console.log(calcAverageHumanAge(ages1));
console.log(calcAverageHumanAge(ages2));
