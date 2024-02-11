import mongoose from "mongoose";

const schema = mongoose.Schema;

const carSchema = new schema({
  brand: {
    type: String,

    required: true,
  },

  model: {
    type: String,

    required: true,
  },

  package: {
    type: String,

    required: true,
  },

  color: {
    type: String,

    required: true,
  },

  year: {
    type: Number,

    required: true,
  },

  category: {
    type: String,

    required: true,
  },

  price: {
    type: Number,

    required: true,
  },
  description: {
    type: String,

    required: true,
  },
});

const carModel = mongoose.model("car", carSchema);

export {carModel}
