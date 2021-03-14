const express = require("express");

const routes = express.Router();

const gameController = require("./controllers/games");
const shopController = require("./controllers/shops");

routes.get("/games", gameController.index);
routes.get("/games/:id", gameController.find);

routes.get("/shops", shopController.index);

module.exports = routes;
