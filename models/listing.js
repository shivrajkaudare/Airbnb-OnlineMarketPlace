const mongoose = require();
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    // here we set default value to an image.
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listSchema);

modules.export = Listing;
