// Stop gninnipS My sdroW!

console.log(' *** Day 25: Spin Words *** ')

function spinWords(string) {
  //TODO Have fun :)
  let words = string.split(' ')

  let editedWords = words.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    } else {
      return word
    }
  })
  return editedWords.toString().split(',').join(' ')
}

console.log(spinWords('Hey fellow warriors'))
