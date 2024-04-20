import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import SequelizeProduct from './SequelizeProduct';

class SequelizePacks extends Model<InferAttributes<SequelizePacks>,
  InferCreationAttributes<SequelizePacks>> {
    declare id: bigint;

    declare packId: bigint;

    declare productId: bigint;

    declare qty: bigint;
}

SequelizePacks.init({
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  packId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    field: 'pack_id',
  },
  productId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    field: 'product_id',
  },
  qty: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'packs',
  timestamps: false,
  underscored: true,
});

SequelizePacks.belongsTo(SequelizeProduct, { foreignKey: 'packId', targetKey: 'code' });
SequelizePacks.belongsTo(SequelizeProduct, { foreignKey: 'productId', targetKey: 'code' });

export default SequelizePacks;
