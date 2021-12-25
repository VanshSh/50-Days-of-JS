// Find The Parity Outlier

console.log('DAY 45 Find the Parity Outlier')

function findOutlier(integers) {
  let even = integers.filter((a) => a % 2 === 0)
  let odd = integers.filter((a) => a % 2 !== 0)
  let lier = even.length === 1 ? even[0] : odd[0]
  return lier
}
let integers = [2, 4, 0, 100, 4, 11, 2602, 36]
console.log(findOutlier(integers))
