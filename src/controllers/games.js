const Game = require("../models/Game");

module.exports = {
  async index(req, res) {
    try {
      const games = await Game.findAll();

      res.send(games);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
