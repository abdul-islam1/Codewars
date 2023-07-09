"use strict";
function solution(string) {
  let strArr = string.split("");
  let capitalLetterIndexArr = [];

  for (let i in strArr) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      capitalLetterIndexArr.push(Number(i));
    }
  }
  capitalLetterIndexArr.unshift(0);

  let retString = "";

  for (let i = 0; i < capitalLetterIndexArr.length; i++) {
    retString += [
      strArr.slice(capitalLetterIndexArr[i], capitalLetterIndexArr[i + 1]),
      " ",
    ]
      .join("")
      .split(",")
      .join("");
  }

  return retString.substring(0, retString.length - 1);
}

console.log(solution("identifier"));
console.log("");
console.log(solution("camelCasing")); //camel Casing'
console.log(solution("camelCasingTest")); //camel Casing Test
