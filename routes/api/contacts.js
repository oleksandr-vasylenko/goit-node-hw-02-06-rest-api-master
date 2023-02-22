const express = require("express");
const cntrl = require("../../controllers/contacts");
const router = express.Router();

router.get("/", cntrl.getAll);

router.get("/:contactId", cntrl.getById);

router.post("/", cntrl.addNew);

router.delete("/:contactId", cntrl.deletebyId);

router.put("/:contactId", cntrl.updateById);

module.exports = router;
