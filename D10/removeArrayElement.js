// Write a function to remove array element based on object property?

console.log(' *** Day 10: Remove Array Element Based on Object Property *** ')
const array = [
  { field: 'id', operator: 'eq' },
  { field: 'cStatus', operator: 'eq' },
  { field: 'money', operator: 'eq' },
]

const filterField = 'money'

function removeArrayElement(filterField) {
  // write your solution here

  let filteredArray = array.filter((e) => {
    return e.field !== filterField
  })

  return filteredArray
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
