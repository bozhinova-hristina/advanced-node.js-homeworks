import { Router } from "express";
import { OrderController } from "../controllers/order.controller.js";

export const orderRouter = Router();

//1. Get all orders
orderRouter.get("/", OrderController.getAllOrders);

//2.Get order by id
orderRouter.get("/:id", OrderController.getOrderById);

//3.Create order
orderRouter.post("/", OrderController.createOrder);

// 4.Update an order
orderRouter.patch("/:id", OrderController.updateOrder);

// 5. Delete an order
orderRouter.delete("/:id", OrderController.deleteOrder);
