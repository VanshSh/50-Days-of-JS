console.log("DAY 18 - NUMBER OF GRAINS")


const totalGrains = () => {
  let firstNumber = 1
  let commonRatio = 2
  let rn_1 = commonRatio ** 64 - 1
  let sumOfNth = firstNumber * rn_1
  let valueInBigInt = BigInt(`${sumOfNth}`)
  return valueInBigInt
}

const grainsOn = (input) => {
  // Following GP Method
  let firstNumber = 1
  let commonRatio = 2

  let grainOnNummber = firstNumber * commonRatio ** (input - 1)
  return grainOnNummber
}

console.log(`Total grains upto 5th square: ${totalGrains()}`)

console.log(`Grains on 5th square: ${grainsOn(5)}`)
