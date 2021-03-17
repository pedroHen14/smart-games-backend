const Shop = require("../models/Shop");

module.exports = {
  async index(req, res) {
    try {
      const shops = await Shop.findAll({
        attributes: ["id", "name", "map_link"],
      });

      res.send(shops);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async find(req, res) {
    const shopId = req.params.id;

    try {
      const shop = await Shop.findByPk(shopId, {
        attributes: ["id", "name", "map_link"],
      });

      res.send(shop);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
