const gameService = require("../service/game-service");

class GameController {
  async addGame(req, res, next) {
    try {
      const { newGame } = req.body;
      const { name, genre, price, image, description, age, platform } = newGame;
      const selected = false;
      const rating = 1;
      const amount = 1;
      const gameData = await gameService.addGame(
        name,
        genre,
        description,
        price,
        image,
        amount,
        rating,
        age,
        platform,
        selected
      );
      return res.json(gameData);
    } catch (e) {
      next(e);
    }
    return res.status(200);
  }

  async deleteGame(req, res, next) {
    try {
      const { id } = req.params;
      await gameService.deleteGame(id);
      return res.status(200);
    } catch (e) {
      next(e);
    }
    return res.status(200);
  }

  async editGame(req, res, next) {
    try {
      const { _id, name, genre, description, price, image, platform, age } =
        req.body;
      await gameService.editGame(
        _id,
        name,
        genre,
        description,
        price,
        image,
        platform,
        age
      );
      return res.status(200);
    } catch (e) {
      next(e);
    }
    return res.status(200);
  }
}

module.exports = new GameController();
