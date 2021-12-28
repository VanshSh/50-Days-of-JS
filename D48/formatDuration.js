// Human readable duration format

console.log('DAY 48: Format Duration')

let timeList = {
  minute: 60,
  hour: 3600,
  day: 86400,
  year: 31536000,
}

function formatDuration(seconds) {
  let time = ''
  let remainder = seconds
  if (seconds >= timeList.year) {
    Math.floor(remainder / timeList.year) === 1
      ? (time = time.concat(' 1 year,'))
      : (time = time.concat(` ${Math.floor(remainder / timeList.year)} years,`))
    remainder = remainder % timeList.year
  }
  if (remainder >= timeList.day && remainder < timeList.year) {
    remainder % timeList.day === 0 && time != ''
      ? (time = time.slice(0, -1).concat(' and'))
      : null
    Math.floor(remainder / timeList.day) === 1
      ? (time = time.concat(' 1 day,'))
      : (time = time.concat(` ${Math.floor(remainder / timeList.day)} days,`))
    remainder = remainder % timeList.day
  }
  if (remainder >= timeList.hour && remainder < timeList.day) {
    remainder % timeList.hour === 0 && time != ''
      ? (time = time.slice(0, -1).concat(' and'))
      : null
    Math.floor(remainder / timeList.hour) === 1
      ? (time = time.concat(' 1 hour,'))
      : (time = time.concat(` ${Math.floor(remainder / timeList.hour)} hours,`))
    remainder = remainder % timeList.hour
  }
  if (remainder >= timeList.minute && remainder < timeList.hour) {
    remainder % timeList.minute === 0 && time != ''
      ? (time = time.slice(0, -1).concat(' and'))
      : null
    Math.floor(remainder / timeList.minute) === 1
      ? (time = time.concat(' 1 minute,'))
      : (time = time.concat(
          ` ${Math.floor(remainder / timeList.minute)} minutes,`
        ))
    remainder = remainder % timeList.minute
  }
  if (remainder <= 59) {
    remainder > 0 && time != ''
      ? (time = time.slice(0, -1).concat(' and'))
      : null
    seconds === 0
      ? (time = 'now')
      : remainder === 1
      ? (time = time.concat(' 1 second'))
      : remainder > 1
      ? (time = time.concat(` ${remainder} seconds`))
      : null
  }
  return time.charAt(time.length - 1) === ','
    ? (time = time.slice(0, -1).trim())
    : time.trim()
}

console.log(formatDuration(0), 'now')
