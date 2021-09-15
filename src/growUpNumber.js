function growUpNumber(number) {
  if (number <= 0) return [];

  let result = [];

  for (; number >= 0; number--) {
    result.push(number);
  }

  return result;
}

module.exports = growUpNumber;
