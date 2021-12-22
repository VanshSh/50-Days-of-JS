// Sum of two lowest positive integers

console.log('DAY 42: Sum of two lowest positive integers')

function sumTwoSmallestNumbers(numbers) {
  //Code below

  let sortedArray = numbers.sort(function (a, b) {
    return a - b
  })
  return sortedArray[0] + sortedArray[1]
}
