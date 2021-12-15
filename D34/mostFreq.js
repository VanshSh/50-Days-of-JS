// // Write a program to find the most frequent item of an array

// console.log('*** DAY 34: MOST FREQUENT ITEM ***')

function mostFreq(arr) {
  let mostFrequent = 1
  let m = 0
  let item
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++
      }
      if (mostFrequent < m) {
        mostFrequent = m
        item = arr[i]
      }
    }
    m = 0
  }

  // output: item (number of times)
  return `${item} ${mostFrequent}`
}

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

console.log(mostFreq(arr1))