"use strict";

function likes(names) {
  const length = names.length;

  if (typeof names === "object") {
    switch (length) {
      case 0:
        return `no one likes this`;

      case 1:
        return `${names[0]} likes this`;

      case 2:
        return `${names[0]} and ${names[1]} like this`;

      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;

      default:
        return `${names[0]}, ${names[1]} and ${
          names.length - 2
        } others like this`;
    }
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Peter", "Jonas"]));
console.log(likes(["Peter", "Jonas", "Tony"]));
console.log(likes(["Peter", "Jonas", "Maximillion", "Tony"]));
