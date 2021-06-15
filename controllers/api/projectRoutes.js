const router = require("express").Router();
const { User, Project, Tasks } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create({
      name: req.body.name,
      description: req.body.description,
      due_date: req.body.due,
      icon_ref: req.body.icon,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/task/:id", async (req, res) => {
  try {
    const taskUpdate = await Tasks.update(
      {
        is_completed: req.body.completed,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!taskUpdate) {
      res(404).json({ message: "No task with that id" });
    }

    res.status(200).json(taskUpdate);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
