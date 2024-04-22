import { IProduct } from "./IProduct";

export interface IPack {
  id?: bigint;
  packId: bigint;
  productId: bigint;
  qty?: bigint;
}

export interface IPackReduce  extends IPack {
  product: IProduct[];
  dataValues?: any;
}