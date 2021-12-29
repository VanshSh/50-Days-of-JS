// is this a Triangle?

console.log('DAY:49 isTriangle')

const isTriangle = (a, b, c) => {
  let firstandSecond = a + b
  let secondandThird = b + c
  let thirdandFirst = a + c

  if (firstandSecond < c || secondandThird < a || thirdandFirst < b) {
    return false
  } else {
    return true
  }
}

console.log(isTriangle(7, 2, 2))
