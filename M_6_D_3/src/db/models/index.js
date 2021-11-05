import Product_Category from './Product_CategoryTable.js';
import ShoppingCart from './ShoppingCartTable.js';
import Category from './CategoryTable.js';
import Product from './ProductTable.js';
import Review from './ReviewTable.js';
import User from './UserTable.js';

Product.hasMany(Review, { onDelete: 'CASCADE' });
Review.belongsTo(Product, { onDelete: 'CASCADE' });

User.hasMany(Review, { onDelete: 'CASCADE', foreignKey: 'user_id' });
Review.belongsTo(User, { onDelete: 'CASCADE', foreignKey: 'user_id' });

ShoppingCart.hasOne(User);


Product.belongsToMany(Category, {
	through: { model: Product_Category, unique: false },
});
Category.belongsToMany(Product, {
	through: { model: Product_Category, unique: false },
});

export default {
	Product_Category,
	ShoppingCart,
	Category,
	Product,
	Review,
	User,
};
