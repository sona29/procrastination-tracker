const router = require("express").Router();
const { User, Project, Tasks } = require("../models");
const withAuth = require("../utils/auth");

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

    // res.status(200).json(project);

    res.render("project-profile", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
