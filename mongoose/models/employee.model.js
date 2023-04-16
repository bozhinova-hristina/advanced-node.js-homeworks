import { Schema, model } from "mongoose";
import validator from "validator";

//Defining a employee schema

const employeeSchema = new Schema({
  name: {
    type: String,
    required: [true, "First name is required"],
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (error) => `${error.value} is not a valid email`,
    },
  },
  jobTitle: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
});

export const Employee = model("Employee", employeeSchema);
