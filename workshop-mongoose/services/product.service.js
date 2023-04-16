import { Product } from "../models/product.model.js";

export class ProductService {
  // 1.Get all products
  static async getAllProducts(filters) {
    if (filters.stock) filters.stock = { $gt: 10 };

    const products = await Product.find(filters || {}).sort({ stock: 1 });
    return products;
  }
  // 2.Get products by id
  static async getProductById(productId) {
    const product = await Product.findById(productId);

    if (!product) throw new Error("Product not found");

    return product;
  }

  //   3. Create a product
  static async createProduct(productData) {
    if (productData._id) throw new Error("Invalid Data");
    const newProduct = new Product(productData);

    const createProduct = await newProduct.save();

    console.log("Save response", createProduct);

    return createProduct;
  }
  // 4.Update a product
  static async updateProduct(productId, updateData) {
    const product = await this.getProductById(productId);

    if (updateData._id) throw new Error("Invalid data");

    Object.assign(product, updateData);

    const response = await product.save();
    console.log("Update response", response);

    return response;
  }

  // 5.Delete a product
  static async deleteProduct(productId) {
    const response = await Product.findByIdAndDelete(productId);

    if (!response) throw new Error("Product not found");

    console.log(response);
  }
}
