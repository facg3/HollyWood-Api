var test = require("tape");
var handlers = require("../handler.js");
var {
  getResults
} = handlers;
var allData = ["Patrick Swayze",
  "Kevin Bacon",
  "Benicio Del Toro",
  "Harvey Kietel",
  "Ed Harris",
  "Willem Dafoe",
  "Charles Laughton"
];


test("test getResults function and it's work", (t) => {
  t.deepEqual(getResults(allData, "k"), ["Kevin Bacon"], "all name start with char k");
  t.end();
});
