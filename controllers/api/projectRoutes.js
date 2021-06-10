const router = require("express").Router();
const { User, Project, Tasks } = require("../../models");
const Add2Calendar = require("add2calendar");

router.post("/", async (req, res) => {
  try {
    var singleEventArgs = {
      title: req.body.name,
      start: req.body.due,
      end: req.body.due,
      location: "Sydney, Australia",
      description: req.body.description,
      isAllDay: true,
    };
    var singleEvent = new Add2Calendar(singleEventArgs);

    const google = singleEvent.getGoogleUrl();
    const ical = singleEvent.getICalUrl();
    const outlook = singleEvent.getOutlookUrl();
    const yahoo = singleEvent.getYahooUrl();

    const newProject = await Project.create({
      name: req.body.name,
      description: req.body.description,
      due_date: req.body.due,
      icon_ref: req.body.icon,
      user_id: req.session.user_id,
      google_ref: google,
      ical_ref: ical,
      outlook_ref: outlook,
      yahoo_ref: yahoo,
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
