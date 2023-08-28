function digitize(n) {
  const numArr = [...String(n)];
  const revArr = [];

  for (let i = 0; numArr.length; i++) {
    revArr.push(+numArr.pop());
  }
  return revArr;
}

console.log(digitize(35231));
console.log(digitize(0));
console.log(digitize(123456));
