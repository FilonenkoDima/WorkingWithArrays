"use strict";

const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) => {
    if (age <= 2) return 2 * age;
    else return 16 + age * 4;
  });
  const adultDogs = humanAges.filter((age) => age >= 18);
  const averageHumanAge =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  return averageHumanAge;
};

console.log(calcAverageHumanAge(ages1));
console.log(calcAverageHumanAge(ages2));
