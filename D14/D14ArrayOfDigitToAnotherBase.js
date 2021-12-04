const convertDigitsToAskedBase = (digits, base, askedBase) => {
  let result = []
  let num = Number(digits.join(''))

  let newarray = String(num.toString(askedBase))

  let splitNewArray = newarray.split('')

  splitNewArray.map((digit) => {
    let parsed = parseInt(digit, 16)
    return result.push(parsed)
  })
  return(result)
}
console.log(convertDigitsToAskedBase([5, 8], 10, 16))
