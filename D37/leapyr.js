// Tell if it is a Leap Year

console.log('*** DAY 37: Leap Year ***')

const isLeap = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isLeap(2020))
