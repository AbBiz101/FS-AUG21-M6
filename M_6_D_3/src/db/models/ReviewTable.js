import sequelize from '../index.js';
import s from 'sequelize';

const { DataTypes } = s;
const Review = sequelize.define('review', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	text: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	username: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	
})

//Review.sync({ force: true });
console.log('executes Review.js   *** 2 ');
export default Review;
