const { test, expect } = require("@jest/globals");
const matchDictionary = require("./matchDictionary");

test("matchDictionary", function () {
  expect(matchDictionary("ku", ["kuda", "kurus", "kece", "kucel"])).toEqual(["kuda", "kurus", "kucel"]);
  expect(matchDictionary("di", ["diman", "dih", "debora", "deh", "die"])).toEqual(["diman", "dih", "die"]);
  expect(matchDictionary("ci", ["ayam", "kampus", "memang", "beda"])).toEqual([]);
});
