// WeIrD StRiNg CaSe

console.log('*** Day 28: WeIrD StRiNg CaSe ***')

function toWeirdCase(string) {
  // Your code goes here

  let result = ''
  let i = 0

  while (i < string.length) {
    if (string[i] === ' ') {
      result += ' '
    } else if (i % 2 === 0) {
      result += string[i].toUpperCase()
    } else {
      result += string[i].toLowerCase()
    }

    i++
  }
  return result
}

console.log(
  `The weird case of ${'A test case'} is ${toWeirdCase('A test case')}`
)
