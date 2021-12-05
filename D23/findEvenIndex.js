// Equal Sides Of An Array

console.log('*** Day 23: Equal Sides Of An Array ***')

function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    let left = arr.slice(0, i).reduce((a, b) => a + b)

    let right = arr.slice(i + 1).reduce((a, b) => a + b)

    if (left === right) {
      return i
    }
  }
  return -1
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) // 3
