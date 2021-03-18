const { Model, DataTypes } = require("sequelize");

class Shop extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        map_link: DataTypes.STRING,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
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
