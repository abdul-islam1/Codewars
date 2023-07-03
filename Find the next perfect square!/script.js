"use strict";
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  let num1 = Math.sqrt(sq);
  num1 = Math.trunc(num1);
  let num2 = num1 * num1;

  if (num2 === sq) return (num1 + 1) ** 2;
  return -1;
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1
