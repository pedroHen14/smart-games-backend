const { Model, DataTypes } = require("sequelize");

class Shop extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        number: DataTypes.INTEGER,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Game, { through: "game_shop" });
  }
}

module.exports = Shop;
