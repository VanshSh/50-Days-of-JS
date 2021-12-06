//Write a function to check if an object is empty or not in javaScript?

console.log(' *** Day 9: isEmpty *** ')

const obj = { key: 1 }

function isEmpty(obj) {
  // write your solution here
  let objLength = Object.keys(obj).length
  if (objLength === 0) {
    return true
  } else {
    return false
  }
}

console.log(`is empty object: ${isEmpty(obj)}`)
