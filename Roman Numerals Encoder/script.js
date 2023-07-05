"use strict";

function solution(number) {
  const singleDigitWorker = (digit, placeValue) => {
    //  console.log(`Digit ${digit} and PlaceValue ${placeValue}`);
    switch (digit) {
      case 0:
        return "";
      case 1:
        return placeValue === 1
          ? "I"
          : placeValue === 2
          ? "X" //10s
          : placeValue === 3
          ? "C" //100s
          : placeValue === 4
          ? "M" //1000s
          : "";
      case 2:
        return placeValue === 1
          ? "II" //units
          : placeValue === 2
          ? "XX" //10s
          : placeValue === 3
          ? "CC" //100s
          : placeValue === 4
          ? "MM" // 1000s
          : "";
      case 3:
        return placeValue === 1
          ? "III" //units
          : placeValue === 2
          ? "XXX" //10s
          : placeValue === 3
          ? "CCC" //100s
          : placeValue === 4
          ? "MMM" // 1000s
          : "";
      case 4:
        return placeValue === 1
          ? "IV" //units
          : placeValue === 2
          ? "XL" //10s
          : placeValue === 3
          ? "CD" //100s
          : "";
      case 5:
        return placeValue === 1
          ? "V" //units
          : placeValue === 2
          ? "L" //10s
          : placeValue === 3
          ? "D" //100s
          : "";
      case 6:
        return placeValue === 1
          ? "VI" //units
          : placeValue === 2
          ? "LX" //10s
          : placeValue === 3
          ? "DC" //100s
          : "";
      case 7:
        return placeValue === 1
          ? "VII" //units
          : placeValue === 2
          ? "LXX" //10s
          : placeValue === 3
          ? "DCC" //100s
          : "";
      case 8:
        return placeValue === 1
          ? "VIII" //units
          : placeValue === 2
          ? "LXXX" //10s
          : placeValue === 3
          ? "DCCC" //100s
          : "";
      case 9:
        return placeValue === 1
          ? "IX" //units
          : placeValue === 2
          ? "XC" //10s
          : placeValue === 3
          ? "CM" //100s
          : "";
    }
  };

  let numStr = String(number);
  let romanValue;
  if (numStr.length === 4) {
    romanValue =
      singleDigitWorker(Number(numStr[0]), 4) +
      singleDigitWorker(Number(numStr[1]), 3) +
      singleDigitWorker(Number(numStr[2]), 2) +
      singleDigitWorker(Number(numStr[3]), 1);
    return romanValue;
  } else if (numStr.length === 3) {
    romanValue =
      singleDigitWorker(Number(numStr[0]), 3) +
      singleDigitWorker(Number(numStr[1]), 2) +
      singleDigitWorker(Number(numStr[2]), 1);
    return romanValue;
  } else if (numStr.length === 2) {
    romanValue =
      singleDigitWorker(Number(numStr[0]), 2) +
      singleDigitWorker(Number(numStr[1]), 1);
    return romanValue;
  } else if (numStr.length === 1) {
    romanValue = singleDigitWorker(Number(numStr[0]), 1);
    return romanValue;
  }
}

// console.log(solution(3999));
// console.log(solution(199));
// console.log(solution(29));
// console.log(solution(22));

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(19));
console.log(solution(22));
console.log(solution(15));
console.log(solution(1000));
console.log(solution(1001));
console.log(solution(1990));
console.log(solution(2007));
console.log(solution(2008));
console.log(solution(1666));

console.log(solution(90));
