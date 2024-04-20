import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/ProductModel';
import { ServiceResponse } from './ServiceResponse';

export default class ProductService {
  private productModel = new ProductModel();

  public async getAllProducts(): Promise<ServiceResponse<IProduct[]>> {
    const serviceReponse =  await this.productModel.getAllProducts();
    return { status: 'SUCCESSFUL', data: serviceReponse };
  }
}
