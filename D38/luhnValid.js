// Luhn algorithm

console.log('*** DAY 38: Luhn Algorithm ***')

const valid = (string) => {
  if (/[^0-9-\s]+/.test(string)) return false

  let nCheck = 0,
    bEven = false
  string = string.replace(/\D/g, '')

  for (var n = string.length - 1; n >= 0; n--) {
    var cDigit = string.charAt(n),
      nDigit = parseInt(cDigit, 10)

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9

    nCheck += nDigit
    bEven = !bEven
  }

  return nCheck % 10 == 0
}

console.log(valid('8273 1232 7352 0569'))
