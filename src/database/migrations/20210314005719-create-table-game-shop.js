"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("game_shop", {
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "games",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "shops",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_shop");
  },
};
