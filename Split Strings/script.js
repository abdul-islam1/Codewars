"use strict";

function solution(str) {
  let arr = [];
  for (let i = 0; i <= str.length - 1; i += 2) {
    if (typeof str[i + 1] === "undefined") {
      arr.push(str[i] + "_");
    } else {
      arr.push(str[i] + str[i + 1]);
    }
  }
  return arr;
}
console.log(solution("abc")); //['ab', 'c_']
console.log(solution("abcdef")); // ['ab', 'cd', 'ef']
