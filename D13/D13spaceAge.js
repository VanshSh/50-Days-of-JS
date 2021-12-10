// Convert given seconds to space age on all planets of our solar system

console.log("*** Day 13: Space Age ***")

const spaceAge = (seconds) => {
  const yearsInAllPlanets = {
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
  }

  // Your solution starts here

  const EARTH_YEAR_IN_SECONDS = 31557600
  const MERCURY_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 0.2408467
  const VENUS_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 0.61519726
  const MARS_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 1.8808158
  const JUPITER_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 11.862615
  const SATURN_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 29.447498
  const URANUS_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 84.016846
  const NEPTUNE_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 164.79132

  for (let key in yearsInAllPlanets) {
    let spaceAgeInYears = (
      seconds /
      (key === 'Earth'
        ? EARTH_YEAR_IN_SECONDS
        : key === 'Mercury'
        ? MERCURY_YEAR_IN_SECONDS
        : key === 'Venus'
        ? VENUS_YEAR_IN_SECONDS
        : key === 'Mars'
        ? MARS_YEAR_IN_SECONDS
        : key === 'Jupiter'
        ? JUPITER_YEAR_IN_SECONDS
        : key === 'Saturn'
        ? SATURN_YEAR_IN_SECONDS
        : key === 'Uranus'
        ? URANUS_YEAR_IN_SECONDS
        : key === 'Neptune'
        ? NEPTUNE_YEAR_IN_SECONDS
        : 0)
    ).toFixed(2)

    yearsInAllPlanets[key] = Number(spaceAgeInYears)
  }

  // Your solution ends here

  return yearsInAllPlanets
}

console.log(spaceAge(Math.round(Math.random() * 99999999)))
