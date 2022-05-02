const express = require("express");
const app = express();
const { router } = require("./router/api/game");
app.use(express.json());

app.use("/game", router);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
