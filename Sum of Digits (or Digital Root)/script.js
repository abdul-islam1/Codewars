"use strict";

function digitalRoot(n) {
  let strNumber = String(n);
  let calcNum = 0;
  if (strNumber.length === 1) {
    return n;
  } else {
    for (let i = 0; i <= strNumber.length - 1; i++) {
      const digit = Number(strNumber[i]);
      calcNum += digit;
    }
    return digitalRoot(calcNum);
  }
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2
