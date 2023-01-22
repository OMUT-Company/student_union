const { Router } = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  get,
  event,
  remove,
  applyAnEvent,
} = require("../controllers/eventController");

const eventRouter = Router();

eventRouter.post("/", protect, event);
eventRouter.get("/see", get);
eventRouter.delete("/remove/:id", protect, remove);
eventRouter.post("/apply", applyAnEvent);

module.exports = eventRouter;
