import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeProduct extends Model<InferAttributes<SequelizeProduct>,
  InferCreationAttributes<SequelizeProduct>> {
    declare code: bigint;

    declare name: string;

    declare costPrice: number;

    declare salesPrice: number;
}

SequelizeProduct.init({
  code: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  costPrice: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
    field: 'cost_price',
  },
  salesPrice: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
    field: 'sales_price',
  },
}, {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
  underscored: true,
});

export default SequelizeProduct;