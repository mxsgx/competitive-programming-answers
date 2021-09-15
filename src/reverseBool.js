function reverseBool(bool) {
  if (typeof bool !== "boolean") {
    return "bukan boolean";
  }

  return !bool;
}

module.exports = reverseBool;
