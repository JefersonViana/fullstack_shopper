export interface IProduct {
  code?: bigint;
  name: string;
  costPrice: number;
  salesPrice: number;
  dataValues?: {
    code: bigint;
    name: string;
    costPrice: number;
    salesPrice: number;
  };
}