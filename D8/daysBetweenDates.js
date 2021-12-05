//Write a function which accepts two valid dates and returns the difference between them as number of days

console.log('*** Day 8 : Days Between Dates ***')

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24

function getDaysBetweenDates(dateText1, dateText2) {
  let date1 = new Date(dateText1)
  let date2 = new Date(dateText2)
  let timeDiffdate1 = date1.getTime() - date2.getTime()
  return Math.abs(timeDiffdate1 / DAY_IN_MILLISECONDS)
}

console.log(
  `Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`
)
