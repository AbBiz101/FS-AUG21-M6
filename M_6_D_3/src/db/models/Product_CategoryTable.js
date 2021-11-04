import sequelize from '../index.js';
import s from 'sequelize';

const { DataTypes } = s;

const Product_Category = sequelize.define(
	'product_category',
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
	},
	{ timestamps: false },
);
//Product_Category.sync({ force: true });
console.log('executes Product_Category.js  **** 1');
export default Product_Category;
