const { Router } = require("express");
const { registration, login, me } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");
const adminRouter = Router();

adminRouter.put("/", registration);
adminRouter.put("/login", login);
adminRouter.get("/me", protect, me);

module.exports = adminRouter;
