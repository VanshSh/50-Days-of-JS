// Mumbling
// Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.Mumbling
// Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.

console.log('*** Day 29: Mumbling ***')

function accum(s) {
  // your code goes below

  let result = ''
  for (let i = 0; i < s.length; i++) {
    let temp = s[i].toUpperCase()
    for (let j = 0; j < i; j++) {
      temp += s[i].toLowerCase()
    }
    temp += '-'
    result += temp
  }
  return result.slice(0, -1)
}

console.log(accum('ZpglnRxqenU'))
