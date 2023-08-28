"use strict";
function printerError(s) {
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    let char = s[i];
    }
    if (
      char === "a" ||
      char === "b" ||
      char === "c" ||
      char === "d" ||
      char === "e" ||
      char === "f" ||
      char === "g" ||
      char === "h" ||
      char === "i" ||
      char === "j" ||
      char === "k" ||
      char === "l" ||
      char === "m"
    ) {
      count++;
    }
  }
  return `${s.length - count}/${s.length}`;
}

const str1 = "aaabbbbhaijjjm";
const str2 = "aaaxbbbbyyhwawiwjjjwwm";
console.log(printerError(str1));
console.log(printerError(str2));
