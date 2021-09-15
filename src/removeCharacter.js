function removeCharacter(strings) {
  let tmp = [];

  for (let string of strings) {
    if (string.charAt(0) === "C") {
      continue;
    }

    tmp.push(string);
  }

  return tmp;
}

module.exports = removeCharacter;
