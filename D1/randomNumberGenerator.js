// Function which returns a random number in the given range

/**************************************** ******************************/

console.log('*** Day 1: Random Number Generator ***')

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  // write your solution here

  return Math.floor(Math.random() * (rangeStart - rangeEnd) + rangeEnd)
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
