import sequelize from '../index.js';
import s from 'sequelize';

const { DataTypes } = s;

const Category = sequelize.define(
	'category',
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		type: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		discribtion: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{ timestamps: false },
);
//Category.sync({ force: true });
console.log('executes Category.js  **** 1');
export default Category;
