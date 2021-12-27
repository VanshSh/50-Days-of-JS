// A Needle in the Haystack

console.log('DAY 46 - A Needle in the Haystack')

function findNeedle(haystack) {
  let index = haystack.indexOf('needle')
  return index
  // your code here
}

console.log(
  `found the needle at position ${findNeedle([
    '3',
    '123124234',
    undefined,
    'needle',
    'world',
    'hay',
    2,
    '3',
    true,
    false,
  ])}`
)
