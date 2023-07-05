"use strict";

function toCamelCase(str) {
  let arr = str.split("");

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === "-" || arr[i] === "_") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr.splice(i, 1);
    }
  }
  return arr.join("");
}

console.log(toCamelCase("the-stealth-warrior")); //theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); //TheStealthWarrior
console.log(toCamelCase("The_Stealth-Warrior")); //TheStealthWarrior
