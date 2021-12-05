// Write Number in Expanded Form

console.log('*** Day 24: Expanded Form ***')

function expandedForm(num) {
  // Your code here.
  let str = num.toString()
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      arr.push(str[i] + '0'.repeat(str.length - i - 1))
    }
  }
  return arr.join('+')
}

console.log('Exapnded Form is: ', expandedForm(734)) //'700 + 40 + 2'
