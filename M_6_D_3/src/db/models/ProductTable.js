import sequelize from '../index.js';
import s from 'sequelize';

const { DataTypes } = s;

const Product = sequelize.define('product', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	category: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	image: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});
//Product.sync({ force: true });
console.log('executes Product.js  **** 1');
export default Product;
