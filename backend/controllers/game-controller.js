const gameService = require("../service/game-service");

class GameController {
  async addGame(req, res, next) {
    try {
      const { newGame } = req.body;
      const {
        name,
        genre,
        price,
        image,
        description,
        age,
        platform,
        rating = 1,
        amount = 1,
        selected = false,
      } = newGame;

      await gameService.addGame(
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
      return res.status(200);
    } catch (e) {
      next(e);
    }
  }

  async deleteGame(req, res, next) {
    try {
      const { id } = req.params;
      await gameService.deleteGame(id);
      return res.status(200);
    } catch (e) {
      next(e);
    }
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
  }
}

module.exports = new GameController();
