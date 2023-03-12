const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }).populate(
    "owner",
    "email subscription"
  );
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addNew = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  // const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deletebyId = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "contact deleted",
  });
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addNew: ctrlWrapper(addNew),
  deletebyId: ctrlWrapper(deletebyId),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
