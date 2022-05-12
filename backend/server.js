const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const compression = require("compression");
const authRouter = require("./router");
const errorMiddleware = require("./middlewares/error-middleware");
const UserModel = require("./models/user-model");
const GameModel = require("./models/game-model");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use("/api", authRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, console.log(`Server running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

app.get("/api/getTopProducts", async (req, res) => {
  const gamesData = await GameModel.find();

  const filteredDataGames = gamesData
    .sort((game1, game2) => game2.rating - game1.rating)
    .slice(0, 3);

  res.json(filteredDataGames);
});

app.get("/api/games", async (req, res) => {
  const gamesData = await GameModel.find();
  res.json(gamesData);
});

app.get(`/api/products/:platform`, async (req, res) => {
  const { platform, criteria = "name", genre, age, searchText } = req.query;

  const gamesData = await GameModel.find();

  let gamesPlatform = gamesData.filter((game) =>
    game.platform.includes(platform)
  );

  if (criteria) {
    gamesPlatform = gamesPlatform.sort();
  }

  if (criteria === "price") {
    gamesPlatform = gamesPlatform.sort(
      (game1, game2) => game2.price - game1.price
    );
  }

  if (criteria === "rating") {
    gamesPlatform = gamesPlatform.sort(
      (game1, game2) => game2.rating - game1.rating
    );
  }

  if (genre) {
    gamesPlatform = gamesPlatform.filter((game) => game.genre === genre);
  }

  if (age) {
    gamesPlatform = gamesPlatform.filter((game) => game.age === age);
  }

  if (searchText) {
    gamesPlatform = gamesPlatform.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return res.status(200).json(gamesPlatform);
});

app.get("/api/search", async (req, res) => {
  const { searchText } = req.query;

  const gamesData = await GameModel.find();

  if (!searchText) {
    return res.status(200).send([]);
  }

  if (searchText !== "") {
    if (
      gamesData.find(
        (game) => game.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
    ) {
      const filteredGames = gamesData.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
      return res.status(200).send(filteredGames);
    }
    return res.status(201).end();
  }

  return res.status(200);
});

app.post("/api/changepassword", async (req, res) => {
  const { currentUser, newPassword } = req.body;
  const hashNewPassword = await bcrypt.hash(newPassword, 5);
  const userId = currentUser.id;

  await UserModel.findByIdAndUpdate(userId, { password: hashNewPassword });

  res.status(200);
});
