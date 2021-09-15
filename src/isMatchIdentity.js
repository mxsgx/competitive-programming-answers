function isMatchIdentity(string) {
  let tmp;

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);

    if (typeof tmp !== "undefined" && tmp !== char) {
      return false;
    }

    tmp = char;
  }

  return true;
}

module.exports = isMatchIdentity;
