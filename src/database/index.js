const dbConfig = require("../config/database");
const { Sequelize } = require("sequelize");

const Game = require("../models/Game");
const Shop = require("../models/Shop");

const connection = new Sequelize(dbConfig);

Game.init(connection);
Shop.init(connection);

Game.associate(connection.models);
Shop.associate(connection.models);
