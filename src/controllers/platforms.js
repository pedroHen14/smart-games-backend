const Platform = require("../models/Platform");

module.exports = {
  async index(req, res) {
    try {
      const platforms = await Platform.findAll({
        attributes: ["id", "name"],
      });

      res.send(platforms);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
