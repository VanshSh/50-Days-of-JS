//Write a function to truncate a string to a certain number of words

console.log('*** Day 6: Truncate a string ***')

const input = 'JavaScript is simple but not easy to master'
const wordLimit = 3

function truncateWithWordLimit(input, wordLimit) {
  // write your solution here
  let newString = input.split(' ', wordLimit).join(' ')

  return newString
}

console.log(`Truncated string: ${truncateWithWordLimit(input, wordLimit)}`) // JavaScript is simple 
