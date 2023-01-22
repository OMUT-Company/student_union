const { Router } = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  get,
  offer,
  create,
  update,
  deleted,
  getOffers,
  refuseOffer,
  confirmOffer,
} = require("../controllers/organizationController");

const organizationRouter = Router();

organizationRouter.post("/", protect, create);
organizationRouter.get("/get", protect, get);
organizationRouter.put("/update", protect, update);
organizationRouter.delete("/deleted/:id", deleted);
organizationRouter.post("/offer", offer);
organizationRouter.get("/offer/get", protect, getOffers);
organizationRouter.post("/offer/confirm/:id", protect, confirmOffer);
organizationRouter.delete("/offer/refused/:id", protect, refuseOffer);

module.exports = organizationRouter;
