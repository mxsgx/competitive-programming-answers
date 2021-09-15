function howManyAlphabet(number) {
  let string = "Lamborgini".split("");

  string[1] = string[1].repeat(number);

  return string.join("");
}

module.exports = howManyAlphabet;
