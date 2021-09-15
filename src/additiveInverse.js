function additiveInverse(numbers) {
  for (let i in numbers) {
    if (numbers[i] === 0) {
      continue;
    }

    numbers[i] = -numbers[i];
  }

  return numbers;
}

module.exports = additiveInverse;
