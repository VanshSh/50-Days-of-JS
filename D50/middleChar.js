// Get Middle Character

console.log("DAY 50: Middle Character");

function getMiddle(s) {
  let length = s.length
  let halfLength = Math.trunc(length / 2)

  if (length % 2 !== 0) {
    return s.charAt(halfLength)
  } else {
    return `${s.charAt(halfLength - 1)}${s.charAt(halfLength)}`
  }
}
console.log(getMiddle('testing')) 