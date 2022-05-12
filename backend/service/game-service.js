const GameModel = require("../models/game-model");
const GameDto = require("../dtos/game-dto");

class UserService {
  async addGame(name, genre, description, price, image, amount, rating, age, platform, selected) {
    const game = await GameModel.create({
      name,
      genre,
      description,
      price,
      image,
      amount,
      rating,
      age,
      platform,
      selected,
    });

    const gameDto = new GameDto(game);

    return {
      gameDto,
    };
  }

  async deleteGame(_id) {
    const game = await GameModel.deleteOne({
      _id,
    });

    return {
      game,
    };
  }

  async editGame(_id, name, genre, description, price, image, platform, age) {
    const game = await GameModel.findById(_id);
    game.name = name;
    game.genre = genre;
    game.description = description;
    game.price = price;
    game.image = image;
    game.price = price;
    game.image = image;
    game.age = age;
    game.platform = platform;

    await game.save();

    return {
      game,
    };
  }
}

module.exports = new UserService();
