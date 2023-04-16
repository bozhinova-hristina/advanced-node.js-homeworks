import { Order } from "../models/order.model.js";

export class OrderService {
  // 1. Get all Orders
  static async getAllOrders() {
    return Order.find({});
  }
  //   2. Get orders by id
  static async getOrderById(OrderId) {
    const order = await Order.findById(OrderId).populate("products");

    if (!order) throw new Error("Order not found");

    return order;
  }
  //   3. Create order
  static async createOrder(orderData) {
    if (orderData._id) throw new Error("Invalid data");

    const newOrder = new Order(orderData);

    const createdOrder = await newOrder.save();

    return createdOrder;
  }

  // 4.Update an order
  static async updateOrder(orderId, updateData) {
    const order = await this.getOrderById(orderId);

    if (updateData._id) throw new Error("Invalid data");

    Object.assign(order, updateData);

    const response = await order.save();
    console.log("Update response", response);

    return response;
  }

  // 5.Delete an order
  static async deleteOrder(orderId) {
    const response = await Order.findByIdAndDelete(orderId);

    if (!response) throw new Error("Product not found");

    console.log(response);
  }
}
