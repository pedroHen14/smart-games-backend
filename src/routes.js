const express = require("express");

const routes = express.Router();

const gameController = require("./controllers/games");
const shopController = require("./controllers/shops");
const orderController = require("./controllers/orders");

routes.get("/games", gameController.index);
routes.get("/games/:id", gameController.find);

routes.get("/shops", shopController.index);
routes.get("/shops/:id", shopController.find);

routes.post("/order", orderController.store);

module.exports = routes;
