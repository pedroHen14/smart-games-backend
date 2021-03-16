const { Model, DataTypes } = require("sequelize");

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        discount: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Shop, { through: "game_shop" });
    this.belongsToMany(models.Platform, { through: "game_platform" });
    this.belongsToMany(models.Order, { through: "orders" });
  }
}

module.exports = Game;
