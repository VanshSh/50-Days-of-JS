// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

console.log('*** Day 5: Get the Gap ***');

let string = 'XeroX'

function getTheGapX(str) {
  if (!str.includes('X')) {
    return -1
  } else {
    let firstCharOfX = str.indexOf('X')
    let secondCharOfX = str.lastIndexOf('X')

    return secondCharOfX - firstCharOfX
  }
}

console.log(`Gap between the X's: ${getTheGapX(string)}`)
