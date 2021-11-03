import Product from './ProductTable.js'; 
import Review from './ReviewTable.js';

Product.hasMany(Review, { onDelete: 'CASCADE' });
Review.belongsTo(Product, { onDelete: 'CASCADE' });

export default { Product, Review };
