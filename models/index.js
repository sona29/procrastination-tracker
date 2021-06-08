const User = require("./User");
const Project = require("./Project");
const Tasks = require("./Tasks");

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Project.belongsTo(User, {
  foreignKey: "user_id",
});

Project.hasMany(Tasks, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});

Tasks.belongsTo(Project, {
  foreignKey: "project_id",
});

module.exports = { User, Project, Tasks };
