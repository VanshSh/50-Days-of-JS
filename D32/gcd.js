// Write a program to find the greatest common divisor (gcd) of two positive numbers.

console.log('*** DAY 32: Greatest Common Divisor ***')

function gcd(a, b) {
  // write your code here
  if (!b) {
    return a
  }
  return gcd(b, a % b)
}

const a = 2154
const b = 458

console.log('The GCD of ' + a + ' ', b + ' is ' + gcd(a, b))
