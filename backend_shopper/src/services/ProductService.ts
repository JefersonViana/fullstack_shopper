import PackModel from '../models/PackModel';
import ProductModel from '../models/ProductModel';
import { ServiceResponse } from './ServiceResponse';
import manipulatedProducts, { ListProducts } from './manipulated_products';

export default class ProductService {
  private productModel = new ProductModel();
  private packModel = new PackModel();

  public async getAllProducts(): Promise<ServiceResponse<ListProducts>> {
    const allProducts = await Promise.all([this.packModel.getAllPacks(), this.productModel.getAllProducts()])
    const listProducts = manipulatedProducts(allProducts[0], allProducts[1]);
    return { status: 'SUCCESSFUL', data: listProducts };
  }
}
