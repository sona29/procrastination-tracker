const router = require("express").Router();
const { User, Project, Tasks } = require("../../models");

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
