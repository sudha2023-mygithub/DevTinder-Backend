const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://msreddy885_db_user:Sudharshan@namastenode.l4oozco.mongodb.net/DevTinder",
  );
};

module.exports = connectDB;
