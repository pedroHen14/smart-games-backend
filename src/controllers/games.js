const Game = require("../models/Game");

module.exports = {
  async index(req, res) {
    try {
      const games = await Game.findAll({
        attributes: ["id", "name", "description", "image", "price", "discount"],
        include: [
          {
            association: "Shops",
            attributes: ["id", "name", "map_link", "latitude", "longitude"],
            through: { attributes: [] },
          },
          {
            association: "Platforms",
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });

      res.send(games);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async find(req, res) {
    const gameId = req.params.id;

    try {
      const game = await Game.findByPk(gameId, {
        attributes: ["id", "name", "description", "image", "price", "discount"],
        include: [
          {
            association: "Shops",
            attributes: ["id", "name", "map_link", "latitude", "longitude"],
            through: { attributes: [] },
          },
          {
            association: "Platforms",
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });

      res.send(game);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async update(req, res) {
    const gameId = req.params.id;

    try {
      const game = await Game.findByPk(gameId, {
        attributes: ["id", "name", "description", "image", "price", "discount"],
        include: [
          {
            association: "Shops",
            attributes: ["id", "name", "map_link"],
            through: { attributes: [] },
          },
          {
            association: "Platforms",
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });

      //Definindo o desconto do produto em 10% se ainda não houver desconto
      if (game.discount == 0) game.discount = 10;
      else game.discount = 0;

      //Salvando o novo valor do campo de desconto no banco de dados
      game.save();

      res.status(201).send(game);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
