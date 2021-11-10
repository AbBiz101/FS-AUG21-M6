import express from 'express';
import postendpoint from './routers.js';

const { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog } =
	postendpoint;

const blogRouter = express.Router();

blogRouter.route('/blog').post(createBlog).get(getAllBlogs);

blogRouter
	.route('/blog/:id')
	.put(updateBlog)
	.get(getBlogById)
	.delete(deleteBlog);

export default blogRouter;

blogRouter.post('/:blogId/comment', async (req, res, next) => {
	try {
		// We are receiving the bookId in the req.body. Given that id we want to insert the corresponding book's data into the purchase history of that user (specified by :userId)
		// 1. Find the book in the books collection by id
		const purchasedBook = await BookModel.findById(req.body.bookId, { _id: 0 }); // findById(query, projection), with the usage of projection we could remove the id from the returned book --> when I'm adding the book to the purchaseHistory array, mongo will create a brand new unique id for that book

		if (purchasedBook) {
			// 2. If the book is found, let's add additional info like purchaseDate
			const bookToInsert = {
				...purchasedBook.toObject(),
				purchaseDate: new Date(),
			}; // purchasedBook is a MONGOOSE DOCUMENT (special object with a lot of strange fields), it is NOT a NORMAL OBJECT, therefore if I want to spread it I need to convert it into a plain object
			console.log(bookToInsert);
			// 3. Update the specified user by adding the book to the history

			const updatedUser = await UserModel.findByIdAndUpdate(
				req.params.userId, // WHO we want to modify
				{ $push: { purchaseHistory: bookToInsert } }, // HOW we want to modify the specified user
				{ new: true }, // OPTIONS
			);
			if (updatedUser) {
				res.send(updatedUser);
			} else {
				next(
					createHttpError(404, `User with id ${req.params.userId} not found!`),
				);
			}
		} else {
			next(createHttpError(404, `Book with id ${req.body.bookId} not found!`));
		}
	} catch (error) {
		next(error);
	}
});