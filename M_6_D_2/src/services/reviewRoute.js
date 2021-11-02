import { Router } from 'express';
import reviewHandler from './reviewHandler.js';

const amazonReview = Router();

amazonReview
	.route('/')
	.get(reviewHandler.getAllReview)
	.post(reviewHandler.createReview);

amazonReview
	.route('/:id')
	.put(reviewHandler.updateReview)
	.get(reviewHandler.getReviewbyID)
	.delete(reviewHandler.deleteReview);
	
amazonReview.get("/PR/:id", reviewHandler.getReviewbyProductID);

export default amazonReview;
