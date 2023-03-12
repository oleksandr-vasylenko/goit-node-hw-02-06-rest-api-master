const express = require("express");

const cntrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlwares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, cntrl.getAll);

router.get("/:contactId", authenticate, isValidId, cntrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), cntrl.addNew);

router.delete("/:contactId", authenticate, isValidId, cntrl.deletebyId);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  cntrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  cntrl.updateFavorite
);

module.exports = router;
