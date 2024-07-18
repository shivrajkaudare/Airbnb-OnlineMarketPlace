const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

// connection with Database
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

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "my new Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });
  await sampleListing.save();
  console.log("Sample was saved");
  res.send("Sucessful Tesing.");
});

app.get("/", (req, res) => {
  res.send("hello iam a root");
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
