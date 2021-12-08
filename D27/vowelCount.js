// Vowel Count

console.log(' *** Day 27: Vowel Count ***')

function getCount(str) {
  let vowelsCount = 0
  // enter your magic here

  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i of str.toLowerCase()) {
    if (vowels.includes(i)) {
      vowelsCount++
    }
  }

  return vowelsCount
}

console.log(getCount('THe Strings are SOO COOL'))
