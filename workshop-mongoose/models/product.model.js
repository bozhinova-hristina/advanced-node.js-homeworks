import { Schema, model } from "mongoose";

// Defining a product schema

const productsSchema = new Schema({
  title: {
    type: String,
    required: [true, "First name is required"],
    minLength: 2,
  },
  stock: {
    type: Number,
    required: true,
    minLength: 0,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum: ["books", "electronics", "clothing", "toys", "sports"],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

export const Product = model("Product", productsSchema);
