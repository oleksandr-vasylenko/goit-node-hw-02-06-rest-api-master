const express = require("express");
const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");
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
    const result = await contacts.getContactById(contactId);

    if (!result) {
      throw HttpError(404, "Not Found");

      // const error = new Error("Not Found");
      // error.status = 404;
      // throw error;

      // return res.status(404).json({
      //   message: "Not found",
      // });
    }
    res.json(result);
  } catch (error) {
    const { status = 500, message = "Server Error" } = error;
    res.status(status).json({
      message,
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
