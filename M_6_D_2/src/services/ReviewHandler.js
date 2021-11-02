import pool from '../db/pool.js';

const getAllReview = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getReviewbyID = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createReview = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updateReview = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteReview = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const reviewHandler = {
	getAllReview,
	getReviewbyID,
	createReview,
	updateReview,
	deleteReview,
};

export default reviewHandler;
