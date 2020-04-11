// Round
// pass a value and the number of places to round it to

const round = (_number, _places = 0) => {
  if (Number.isNaN(_number)) {
    throw new TypeError('First Argument must be a number or numeric string.')
  }
  if (Number.isNaN(_places)) {
    throw new TypeError('Second Argument must be a number or numeric string.')
  }

  const number = Number(_number)
  const places = Number(_places)

  return Math.round(number * (10 ** places)) / (10 ** places)
}

export default round
