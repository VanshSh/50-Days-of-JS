// Write a Program to Find the Factorial of a Number

console.log('*** DAY 31 : FACTORIAL ***')

function factorial(n) {
  // write your code here
  if (n === 0) {
    return 1
  } else {
    let factorialValue = factorial(n - 1) * n

    return factorialValue
  }
}

let n = 5
console.log('The factorial of ' + n + ' is ' + factorial(n))
