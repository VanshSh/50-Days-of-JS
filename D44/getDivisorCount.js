// Count the divisors of a number

console.log('DAY 44: COUNT THE DIVISORS OF A NUMBER')

function getDivisorsCnt(num) {
  let divisorsArr = []
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisorsArr.push(i)
    }
  }
  return divisorsArr.length
}
console.log(getDivisorsCnt(num))
