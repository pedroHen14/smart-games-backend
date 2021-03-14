const Game = require("../models/Game");

module.exports = {
  async index(req, res) {
    try {
      const games = await Game.findAll({
        attributes: [
          "id",
          "name",
          "description",
          "image",
          "release_date",
          "developer",
          "price",
        ],
        include: [
          {
            association: "Shops",
            attributes: ["id", "name", "number", "street", "city", "state"],
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
        attributes: [
          "id",
          "name",
          "description",
          "image",
          "release_date",
          "developer",
          "price",
        ],
        include: [
          {
            association: "Shops",
            attributes: ["id", "name", "number", "street", "city", "state"],
            through: { attributes: [] },
          },
        ],
      });

      res.send(game);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
