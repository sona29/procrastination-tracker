const sequelize = require("../config/connection");
const { User, Project, Task } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");
const taskData = require("./taskData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const projects = await Project.findAll();
  for (const task of taskData) {
    await Task.create({
      ...task,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      project_id: projects[Math.floor(Math.random() * projects.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
