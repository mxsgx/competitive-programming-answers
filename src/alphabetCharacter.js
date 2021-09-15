function alphabetCharacter(string) {
  let array = [];

  for (let i = 0; i < string.length; i++) {
    array.push(string.charAt(i));
  }

  return array.sort().join("");
}

module.exports = alphabetCharacter;
