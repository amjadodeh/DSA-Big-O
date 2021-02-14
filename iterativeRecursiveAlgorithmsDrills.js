// 1. Counting Sheep
// a function that counts how many sheep jump over the fence
const countingSheep = (numOfSheep) => {
  for (let i = numOfSheep; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log(`All sheep jumped over the fence`);
};

countingSheep(3);

// 2. Power Calculator
// a function that returns the value of the base raised to the power of the exponent
const powerCalculator = (base, exponent) => {
  let temp = base;
  if (exponent < 0) {
    return `exponent should be >= 0`;
  }
  if (exponent === 0) {
    return 1;
  }
  for (let i = 1; i < exponent; i++) {
    temp *= base;
  }
  return temp;
};

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, 0));
console.log(powerCalculator(10, -2));

// 3. Reverse String
// a function that reverses a string
const reverseString = (string) => {
  let newString = ``;
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

console.log(reverseString('abc'));
console.log(reverseString('string'));

// 4. nth Triangular Number
// a function that calculates the nth triangular number
const triangularNumber = (n) => {
  let temp = 0;
  for (let i = 0; i <= n; i++) {
    temp += i;
  }
  return temp;
};

console.log(triangularNumber(5));

// 5. String Splitter
// a function that splits a string based on a separator
const stringSplitter = (string, separator) => {
  let arr = [];
  let temp = ``;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === separator || i === string.length) {
      arr.push(temp);
      temp = ``;
    } else temp += string[i];
  }
  return arr;
};

console.log(stringSplitter('02/20/2020', '/'));

// 6. Fibonacci
// a function that prints the Fibonacci sequence of a given number
const fibonacci = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1 || i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
};

console.log(fibonacci(7));

// 7. Factorial
// a function that finds the factorial of a given number
const factorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(factorial(5));
