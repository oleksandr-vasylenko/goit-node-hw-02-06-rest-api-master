const express = require("express");

const cntrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody } = require("../../middlwares");

const { schemas } = require("../../models/contact");

router.get("/", cntrl.getAll);

// router.get("/:contactId", cntrl.getById);

router.post("/", validateBody(schemas.addSchema), cntrl.addNew);

// router.delete("/:contactId", cntrl.deletebyId);

// router.put("/:contactId", validateBody(schemas.addSchema), cntrl.updateById);

module.exports = router;
