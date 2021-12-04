// Write a program to reverse a given integer number

console.log(' *** Day 3: Reverse Number *** ');

const num = 389

function reverseGivenInteger(num) {
  // write your solution here

  let newNum = num.toString()
  let answer = parseInt(newNum.split('').reverse().join(''))

  return answer
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
