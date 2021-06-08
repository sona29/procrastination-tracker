const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tasks extends Model {}

Tasks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "project",
        key: "id",
      },
    },
    // start_date: {
    //   type: DataTypes.DATE,
    // },
    // due_date: {
    //   type: DataTypes.DATE,
    // },
    is_completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "tasks",
  }
);

module.exports = Tasks;
