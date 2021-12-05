// Create a regular expression to validate if the given input is valid Indian mobile number or not

console.log('*** D7: Validate Mobile Number ***')

const number = '+919876543210'

function validateMobile(number) {
  let pattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/

  let result = pattern.test(number)

  return result
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
