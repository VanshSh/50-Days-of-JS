// Given a number from 0 to 999,999,999,999, spell out that number in English.

console.log('*** Day 12: Number to Words ***')

import { numberToWords } from './numberToWords'
function sayNumberInEnglish(n) {
  let value = numberToWords.toWords(n)

  return value
}

console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`)
