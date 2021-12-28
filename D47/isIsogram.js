// Check if the characters in the string are unique

console.log(" DAY 47: Check if the characters in the string are unique")

function isIsogram(str) {
  const loweredCaseStr = str.toLowerCase()

  for (let i = 0; i < loweredCaseStr.length; i++) {
    if (
      loweredCaseStr.indexOf(loweredCaseStr[i]) !==
      loweredCaseStr.lastIndexOf(loweredCaseStr[i])
    ) {
      return false // repeats
    }
  }
  return true
}

console.log(isIsogram('mOose'))