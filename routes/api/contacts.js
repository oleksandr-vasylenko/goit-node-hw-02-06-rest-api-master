const express = require("express");

const cntrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlwares");

const { schemas } = require("../../models/contact");

router.get("/", cntrl.getAll);

router.get("/:contactId", isValidId, cntrl.getById);

router.post("/", validateBody(schemas.addSchema), cntrl.addNew);

// router.delete("/:contactId", isValidId, cntrl.deletebyId);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  cntrl.updateById
);

module.exports = router;
