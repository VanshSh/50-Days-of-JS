// Mixed Juices

console.log('DAY 39: Mixed Juices')

const timeToMixJuice = (name) => {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer':
      return 1.5
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}
const limesToCut = (wedgesNeeded, limes) => {
  let currentCount = 0
  let i = 0
  while (currentCount < wedgesNeeded && i < limes.length) {
    const lime = limes[i]
    switch (lime) {
      case 'small': {
        currentCount += 6
        break
      }
      case 'medium': {
        currentCount += 8
        break
      }
      case 'large': {
        currentCount += 10
        break
      }
    }
    i++
  }
  return i
}

const remainingOrders = (timeLeft, orders) => {
  let prepareTime = 0
  while (prepareTime < timeLeft && orders.length > 0) {
    prepareTime += timeToMixJuice(orders.shift())
  }
  return orders
}
