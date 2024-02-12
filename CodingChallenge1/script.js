"use strict";

const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];

const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaWithoutCats = dogsJulia.slice(1, -2);
  const allDogs = [...dogsJuliaWithoutCats, ...dogsKate];
  allDogs.forEach(function (year, i) {
    console.log(
      `Dog number ${i + 1} is ${
        year >= 3
          ? "an adult, and is " + year + " years old"
          : "still a puppy🐶"
      }`
    );
  });
};

checkDogs(julia1, kate1);
console.log("----- TEST DATA 2 -----");
checkDogs(julia2, kate2);
