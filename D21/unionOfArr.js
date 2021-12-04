// Union of Two Arrays

console.log('*** Day 21: Union of Two Arrays ***')

const unionOfArrays = (arr1, arr2) => {
  // code below here

  let concatArr = arr1.concat(arr2)
  let uniqueArr = concatArr.filter((item, index) => {
    return concatArr.indexOf(item) === index
  })
  return uniqueArr
}

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`)
