// Write a JavaScript function to get nth largest element from an unsorted array.

console.log(' DAY 35 nth Largest element from array')

function nthlargest(arr, highest) {
  let sortedArr = arr.sort(function (a, b) {
    return a - b
  })

  let largestNth = sortedArr[highest]

  return largestNth
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652]
const highest = 4

console.log(nthlargest(arr, highest))
