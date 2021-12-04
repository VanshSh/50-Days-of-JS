const colorCode = (color) => {
  const colors = {
    Black: 0,
    Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
    White: 9,
  }
  let firstLetterCapital = color.charAt(0).toUpperCase() + color.slice(1)

  for (let key in colors) {
    if (key === firstLetterCapital) {
      return colors[key]
    }
  }

  return colors[color]
}

console.log(colorCode('blue')) // 6

