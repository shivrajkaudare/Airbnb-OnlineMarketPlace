const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

app.get("/", (req, res) => {
  res.send("hello iam a root");
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
