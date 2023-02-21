const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const contactsPath = path.join(__dirname, "/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();

    const objWithIdIndex = contacts.findIndex(
      (item) => parseInt(item.id) === contactId
    );

    contacts.splice(objWithIdIndex, 1);

    if (!objWithIdIndex) {
      return null;
    }

    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: uuidv4(), body };

    contacts.push(newContact);

    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
