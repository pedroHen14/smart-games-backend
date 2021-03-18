"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("game_shop", [
      {
        game_id: 1,
        shop_id: 3,
      },
      {
        game_id: 1,
        shop_id: 2,
      },
      {
        game_id: 2,
        shop_id: 1,
      },
      {
        game_id: 2,
        shop_id: 2,
      },
      {
        game_id: 2,
        shop_id: 3,
      },
      {
        game_id: 3,
        shop_id: 1,
      },
      {
        game_id: 3,
        shop_id: 3,
      },
      {
        game_id: 4,
        shop_id: 1,
      },
      {
        game_id: 4,
        shop_id: 2,
      },
      {
        game_id: 5,
        shop_id: 1,
      },
      {
        game_id: 5,
        shop_id: 2,
      },
      {
        game_id: 5,
        shop_id: 3,
      },
      {
        game_id: 6,
        shop_id: 1,
      },
      {
        game_id: 6,
        shop_id: 2,
      },
      {
        game_id: 7,
        shop_id: 1,
      },
      {
        game_id: 7,
        shop_id: 3,
      },
      {
        game_id: 8,
        shop_id: 1,
      },
      {
        game_id: 8,
        shop_id: 2,
      },
      {
        game_id: 8,
        shop_id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("game_shop", null);
  },
};
