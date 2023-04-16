import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

export const productRouter = Router();

//1. Get all products
productRouter.get("/", ProductController.getAllProducts);

//2.Get product by id
productRouter.get("/:id", ProductController.getProductById);

//3.Create product
productRouter.post("/", ProductController.createProduct);

// 4.Update a product
productRouter.patch("/:id", ProductController.updateProduct);

// 5. Delete a product
productRouter.delete("/:id", ProductController.deleteProduct);
