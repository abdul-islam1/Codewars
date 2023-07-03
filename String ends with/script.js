"use strict";
function solution(str, ending) {
  const index = str.length - ending.length;
  const filterStr = str.substring(index);

  if (filterStr === ending) return true;
  else return false;
}

console.log(solution("abc", "bc"));
console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("esfugfesiugewfiugabcde", "fiugabcde"));
