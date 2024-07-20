const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello iam a root");
});

// Index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//new Listing Route.
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route.
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// Create route.
app.post("/listings", async (req, res) => {
  // let { title, description, image, price, country, location } = req.body;
  let listing = await req.body.listing;
  console.log(listing);
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "my new Villa",
//     description: "By the beach",
//     image:
//       "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });
//   await sampleListing.save();
//   console.log("Sample was saved");
//   res.send("Sucessful Tesing.");
// });

const port = 8080;
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
