//require squelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model {} //define the Project Class

Project.init(
  //attributes for project
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    icon_ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    google_ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ical_ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outlook_ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yahoo_ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "project",
  }
);

module.exports = Project;
