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
});

//Review.sync({ force: true })//;if u want to make some changes to this table only
console.log('executes Review.js   *** 1 ');
export default Review;
