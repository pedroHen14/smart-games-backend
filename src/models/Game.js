const { Model, DataTypes } = require("sequelize");

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        release_date: DataTypes.DATE,
        developer: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Store, { through: "game_store" });
  }
}

module.exports = Game;
