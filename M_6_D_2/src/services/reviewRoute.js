import { Router } from 'express';
import reviewHandler from './reviewHandler.js';

const amazonReview = Router();

amazonReview.get('/', reviewHandler.getAllReview);
amazonReview.post('/', reviewHandler.createReview);
amazonReview
	.route('/:id')
	.get(reviewHandler.getReviewbyID)
	.put(reviewHandler.updateReview)
	.delete(reviewHandler.deleteReview);

export default amazonReview;
