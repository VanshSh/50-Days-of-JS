// Longest Consecutive Sequence

console.log("DAY 17 - LONGEST CONSECUTIVE SEQUENCE");


const longestConsecutiveSequence = (inputArray) => {
  if (!inputArray.length) return 0

  // Give ability to look up inputArray by value
  const set = new Set(inputArray)
  let max = 0

  for (const num of set) {
    // Make sure we are starting at the beginning of the sequenece
    if (set.has(num - 1)) continue

    let currNum = num
    let currMax = 1

    // Look numbers that make a consecutive sequence
    while (set.has(currNum + 1)) {
      currNum++
      currMax++
    }
    // Update max
    max = Math.max(max, currMax)
  }

  return max
}

console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
