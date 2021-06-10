const router = require("express").Router();
const { User, Project, Tasks } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage", { logged_in: req.session.logged_in });
});

router.get("/project", (req, res) => {
  res.render("new-project", { logged_in: req.session.logged_in });
});

router.get("/profile", async (req, res) => {
  try {
    const allProject = await Project.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const projects = allProject.map((project) => project.get({ plain: true }));

    res.render("profile", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: Tasks,
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render("project-profile", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
