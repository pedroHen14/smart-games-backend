const Shop = require("../models/Shop");

module.exports = {
  async index(req, res) {
    try {
      const shops = await Shop.findAll({
        attributes: ["id", "name", "number", "street", "city", "state"],
      });

      res.send(shops);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
