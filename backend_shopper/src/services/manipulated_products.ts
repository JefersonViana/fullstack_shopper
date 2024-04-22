import { IProduct } from "../interfaces/IProduct";
import { IPackReduce } from "../interfaces/IPack";

export type ListProducts = {
  [key: string]: {
    code: bigint;
    name: string;
    costPrice: string;
    salesPrice: string;
    product?: IProduct[];
    dataValues?: any
  };
};

const manipulatedProducts = (packs: IPackReduce[], products: IProduct[]) => {
  const listProducts: ListProducts = {};

  products.forEach((product) => {
    listProducts[`${product.code}`] = product;
  });
  packs.forEach((pack) => {
    listProducts[`${pack.packId}`].dataValues.product = pack.product;
  })
  return listProducts;
}

export default manipulatedProducts;