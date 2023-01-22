const { Router } = require("express");
const {
  applyForVolunteer,
  getVolunteers,
  removeVolunteer,
  updateVolunteer,
} = require("../controllers/volunteerController");
const { protect } = require("../middleware/authMiddleware");

const volunteerRouter = Router();

volunteerRouter.post("/", applyForVolunteer);
volunteerRouter.get("/see", protect, getVolunteers);
volunteerRouter.delete("/delete/:id", protect, removeVolunteer);
volunteerRouter.put("/update/:id", protect, updateVolunteer);

module.exports = volunteerRouter;
