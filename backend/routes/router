const Router = require("express");
const adminRouter = require("./adminRouts");
const eventRouter = require("./eventRouts");
const volunteerRouter = require("./volunteerRouts");
const organizationRouter = require("./organizationRouts");

const router = Router();
const routes = [
  { routerName: adminRouter, path: "/api/admin" },
  { routerName: eventRouter, path: "/api/event" },
  { routerName: volunteerRouter, path: "/api/volunteer" },
  { routerName: organizationRouter, path: "/api/organization" },
];

routes.forEach(({ routerName, path }) => {
  router.use(path, routerName);
});

router.all("*", (req, res) => {
  res.status(404).send("Bad Request");
});

module.exports = router;
