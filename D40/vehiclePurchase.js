// Vehicle Purchase

console.log('DAY 40 - vehiclePurchase.js')

const needsLicense = (kind) => {
  // code here

  if (kind === 'car' || kind === 'truck') return true
  else return false
}
console.log(' Do I need License ? ', needsLicense('car'))

const chooseVehicle = (option1, option2) => {
  if (option1 < option2) {
    return option1
  } else {
    return option2
  }
}

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))

const calculateResellPrice = (originalPrice, age) => {
  // code here
  if (age < 3) {
    let amountPaid = originalPrice * 0.8
    return amountPaid
  } else if (age > 10) {
    let amountPaid = originalPrice * 0.5
    return amountPaid
  } else if (age >= 3 || age > 10) {
    let amountPaid = originalPrice * 0.7
    return amountPaid
  }
}

console.log('Amount to be paid ', calculateResellPrice(1000, 5))

