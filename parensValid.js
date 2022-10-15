// https://www.codewars.com/kata/52774a314c2333f0a7000688

function areParensValid(expr) {
  let openParens = 0;

  for (const char of expr) {
    if (char === "(") {
      openParens += 1;
    } else if (char === ")") {
      openParens -= 1;
    }

    if (openParens < 0) {
      return false;
    }
  }

  return openParens === 0;
}

console.log(areParensValid("(())((()())())"));
console.log(areParensValid(")(()))"));
console.log(areParensValid(""));