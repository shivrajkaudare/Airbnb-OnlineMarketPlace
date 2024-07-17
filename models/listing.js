const mongoose = require();
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: String,
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listSchema);

modules.export = Listing;
