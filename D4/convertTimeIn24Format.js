// Write a function which can convert the time input given in 12 hours format to 24 hours format

console.log('*** Day 4: Convert Time In 24 Format ***');

const time = '12:10AM'

function convertTo24HrsFormat(time) {
  const median = time.slice(-2)

  let [hours, minutes] = time.split(':')

  if (hours < 12) {
    let add_zero = '0'
    hours = add_zero.concat(hours)
  }
  if (hours === '12') {
    hours = '00'
  }
  if (median === 'PM') {
    hours = parseInt(hours) + 12
  }
  minutes = minutes.slice(0, -2)

  if (minutes.length === 1) {
    minutes = '0' + minutes
  }
  return hours + ':' + minutes
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
