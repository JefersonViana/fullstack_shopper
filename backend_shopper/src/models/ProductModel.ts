import { IProduct } from "../interfaces/IProduct";
import SequelizeProduct from "../database/models/SequelizeProduct";
import { IProductModel } from "../interfaces/IProductModel";

export default class ProductModel implements IProductModel{
  private model = SequelizeProduct;

  public async getAllProducts(): Promise<IProduct[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }
}
