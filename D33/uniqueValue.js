// Write a function that takes an array of numbers and returns the unique values in the array.

console.log('*** DAY 33 : Unique Value ***')

function set(arrOfNum) {
  // write your code here
  let unique = []
  for (let i = 0; i < arrOfNum.length; i++) {
    if (unique.indexOf(arrOfNum[i]) === -1) {
      unique.push(arrOfNum[i])
    } else {
      continue
    }
  }
  return unique
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6]

console.log('result is + ' + set(arrOfNum))
