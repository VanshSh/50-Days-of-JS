// Find the odd int

// Find the integer with odd  number of times in the array

console.log('*** Day 26: Find the odd int ***')

function findOdd(arr) {
  if (arr.length === 0) return -1
  if (arr.length === 1) return arr[0]

  const numMap = new Map()

  arr.map((num) => {
    let currentNumCount = numMap.get(num)

    if (currentNumCount === undefined) {
      numMap.set(num, 1)
    } else {
      numMap.set(num, currentNumCount + 1)
    }
  })

  for (const [key, value] of numMap.entries()) {
    if (value % 2 !== 0) return key
  }

  return -1
}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
