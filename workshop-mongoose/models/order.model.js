import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Product",
    },
  ],
});

export const Order = model("Order", orderSchema);
