"use strict";
const maskify = (arr) => {
  let retArr = "";
  if (arr.length <= 4) {
    for (let i = 0; i < arr.length; i++) {
      retArr += arr[i];
    }
    return retArr;
  } else {
    for (let i = 0; i < arr.length - 4; i++) {
      retArr += "#";
    }
    for (let i = arr.length - 4; i < arr.length; i++) {
      retArr += arr[i];
    }
    return retArr;
  }
};

console.log(maskify("4556364607935616"));
console.log("Hello Man");
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify("Car4"));
console.log(maskify("5Car4"));
