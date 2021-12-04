// Write a program to reverse a string

console.log('*** Day 2: Reverse a String ***')
const str = 'JavaScript is awesome'

function reverseAString(str) {
  // write your solution here

  let newStr = str.split('').reverse().join('')
  return newStr
}

console.log(`Reversed string is: ${reverseAString(str)}`)
