function existsHigherNumber(numbers, n) {
  for (let number of numbers) {
    if (number >= n) {
      return true;
    }
  }

  return false;
}

module.exports = existsHigherNumber;
