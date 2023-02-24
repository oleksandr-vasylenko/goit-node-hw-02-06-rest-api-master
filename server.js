const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://oleksandrv:RMw0VJfyHodujxh0@cluster0.hh5fiki.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// oleksandrv;
// RMw0VJfyHodujxh0;
