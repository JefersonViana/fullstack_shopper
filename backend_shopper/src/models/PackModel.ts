import { IPack, IPackReduce } from "../interfaces/IPack";
import SequelizePacks from "../database/models/SequelizePacks";
import { IPackModel } from "../interfaces/IPackModel";
import SequelizeProduct from "../database/models/SequelizeProduct";

export default class PackModel implements IPackModel{
  private model = SequelizePacks;

  public async getAllPacks(): Promise<IPackReduce[]> {
    const dbData = await this.model.findAll({
      include: [
        {
          model: SequelizeProduct,
          as: 'product',
        },
      ],
    });
    
    const groupedData = dbData.reduce((acc: IPackReduce[], curr: any) => {
      const existingPack = acc.find(pack => pack.packId === curr.packId);

      if (existingPack) {
        existingPack.product.push({
          code: curr.product.code,
          name: curr.product.name,
          costPrice: curr.product.costPrice,
          salesPrice: curr.product.salesPrice,
          qty: curr.qty,
        });
      } else {
        acc.push({
          id: curr.id,
          packId: curr.packId,
          productId: curr.productId,
          product: [{
            code: curr.product.code,
            name: curr.product.name,
            costPrice: curr.product.costPrice,
            salesPrice: curr.product.salesPrice,
            qty: curr.qty,
          }],
        });
      }

      return acc;
    }, []);
    
    return groupedData;
  }
}
