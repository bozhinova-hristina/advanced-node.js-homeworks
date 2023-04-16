import { OrderService } from "../services/order.service.js";

export class OrderController {
  // 1.Get all products
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();

      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  }
  // 2. Get order by id
  static async getOrderById(req, res) {
    try {
      const { id: orderId } = req.params;

      const order = await OrderService.getOrderById(orderId);

      res.json(order);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }
  // 3. Create order
  static async createOrder(req, res) {
    try {
      const orderData = req.body;

      const newOrder = await OrderService.createOrder(orderData);

      res.status(201).json(newOrder);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }

  // 4.Update a order
  static async updateOrder(req, res) {
    try {
      const updatedOrder = await OrderService.updateOrder(
        req.params.id,
        req.body
      );

      res.json(updatedOrder);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }
  //   5. Delete an order

  static async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req.params.id);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }
}
