import sequelize from '../index.js';
import s from 'sequelize';

const { DataTypes } = s;

const ShoppingCart = sequelize.define(
	'shoppingcart',
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		}
	},
	{ timestamps: false },
);
//ShoppingCart.sync({ force: true });
console.log('executes ShoppingCart.js  **** 1');
export default ShoppingCart;