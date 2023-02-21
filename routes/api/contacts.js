const express = require("express");

const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    // console.log(req.params);
    // console.log(contactId);
    const result = await contacts.getContactById(contactId);

    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res, next) => {
  res.json(contacts);
});

router.delete("/:contactId", async (req, res, next) => {
  res.json(contacts);
});

router.put("/:contactId", async (req, res, next) => {
  res.json(contacts);
});

module.exports = router;
