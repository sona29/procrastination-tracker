const router = require("express").Router();
const { Tasks } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newTask = await Tasks.create({
      ...req.body,
    });

    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
