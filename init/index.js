const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
main()
  .then(() => {
    console.log("coonected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    // it delete previous data from database
    await Listing.deleteMany({});
    // inserting data from data.js
    await Listing.insertMany(initdata.data);
    console.log("Data Was Initialised");
  } catch (err) {
    console.error("error initializing data :", err);
  }
};

initDB();
