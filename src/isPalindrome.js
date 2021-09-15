function isPalindrome(string) {
  for (let i = 1; i <= string.length; i++) {
    if (string.substr(i - 1, 1) !== string.substr(-i, 1)) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
