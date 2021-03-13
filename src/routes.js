const express = require("express");

const routes = express.Router();

const gameController = require("./controllers/games");

routes.get("/game", gameController.index);

module.exports = routes;
