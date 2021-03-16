const dbConfig = require("../config/database");
const { Sequelize } = require("sequelize");

const Game = require("../models/Game");
const Shop = require("../models/Shop");
const Order = require("../models/Order");
const Platform = require("../models/Platform");

const connection = new Sequelize(dbConfig);

Game.init(connection);
Shop.init(connection);
Order.init(connection);
Platform.init(connection);

Game.associate(connection.models);
Shop.associate(connection.models);
Order.associate(connection.models);
Platform.associate(connection.models);
