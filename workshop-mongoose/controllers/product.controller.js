import { ProductService } from "../services/product.service.js";

export class ProductController {
  // 1.Get all products
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts(req.query);

      res.json(products);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  }

  // 2.Get product by ID
  static async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);

      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }
  //   3. Create product
  static async createProduct(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);

      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }

  // 4.Update a product
  static async updateProduct(req, res) {
    try {
      const updatedProduct = await ProductService.updateProduct(
        req.params.id,
        req.body
      );

      res.json(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }

  //   5. Delete a product

  static async deleteProduct(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }
}
