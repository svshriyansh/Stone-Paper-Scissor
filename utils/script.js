const res = require("express/lib/response");

function calculate() {
  let options = ["Rock", "Paper", "Scissors"];
  let value = options[Math.floor(Math.random() * options.length)];
  return value;
}
const computeResult = (value1, value2) => {
  let result = null;
  switch (value1) {
    case "Paper":
      if (value2 === "Rock") {
        result = 1;
      } else {
        result = 0;
      }
      break;
    case "Rock":
      if (value2 === "Scissors") {
        result = 1;
      } else {
        result = 0;
      }
      break;
    case "Scissors":
      if (value2 === "Paper") {
        result = 1;
      } else {
        result = 0;
      }
      break;
  }
  return result;
};

module.exports = { calculate, computeResult };
