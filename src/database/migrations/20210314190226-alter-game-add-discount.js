"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("games", "discount", {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("games", "discount");
  },
};
