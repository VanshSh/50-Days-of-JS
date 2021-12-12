// Determine if a sentence is a pangram

console.log(' *** DAY 15: Is Pangram *** ')

const isPangram = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const inputLower = input.toLowerCase()

  const inputArray = inputLower.split('')

  const inputSet = new Set(inputArray)

  const alphabetSet = new Set(alphabet.split(''))

  const intersection = new Set([...inputSet].filter((x) => alphabetSet.has(x)))

  return intersection.size === alphabetSet.size
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
