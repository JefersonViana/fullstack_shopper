import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class ProductController {
  private productService = new ProductService();

  public async getAllProducts(req: Request, res: Response) {

    const { status, data } = await this.productService.getAllProducts();
    return res.status(mapStatusHTTP(status)).json({ data });
  }
}