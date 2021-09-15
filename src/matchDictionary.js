function matchDictionary(string, strings) {
  let tmp = [];

  for (let str of strings) {
    for (let i = 0; i < string.length; i++) {
      if (str.charAt(i) !== string.charAt(i)) {
        break;
      }

      if (string.length === i + 1 && str.charAt(i) === string.charAt(i)) {
        tmp.push(str);
      }
    }
  }

  return tmp;
}

module.exports = matchDictionary;
