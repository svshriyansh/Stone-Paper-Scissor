const router = require("express").Router();
const { calculate, computeResult } = require("../../utils/script");

const playerNumber = 4;
//@route GET api/user
//@desc Start game
//@access public
router.get("/start", (req, res) => {
  const data = {};
  const iteration = {};
  const player = {};
  const score = {};
  try {
    for (let iter = 0; iter < 5; iter++) {
      for (let i = 0; i < playerNumber; i++) {
        player["player " + (i + 1)] = calculate();
        score["player " + (i + 1)] = {};
      }
      for (let i = 0; i < playerNumber; i++) {
        for (let j = 0; j < playerNumber; j++) {
          if (i != j) {
            const value1 = player["player " + (i + 1)];
            const value2 = player["player " + (j + 1)];
            score["player " + (i + 1)]["player " + (j + 1)] = computeResult(
              value1,
              value2
            );
          } else {
            score["player " + (i + 1)]["player " + (j + 1)] = "-";
          }
        }
      }
      //   console.log(JSON.stringify(data));
      data["iteration" + (iter + 1)] = score;
    }
    res.status(200).json({ data });
  } catch (err) {
    // console.log(JSON.stringify(score));
    console.log(err);
    res.status(500).send("Internal Server error");
  }

  //   console.log(JSON.stringify(score));
});
module.exports = { router };
