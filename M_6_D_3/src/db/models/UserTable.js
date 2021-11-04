import sequelize from '../index.js';
import s from 'sequelize';

const { DataTypes } = s;

const User = sequelize.define(
	'user',
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		surname: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		image: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	
);

console.log('executes User.js  **** 1');
export default User;
