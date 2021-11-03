import pool from '../db/pool.js';

const getAllReview = async (req, res, next) => {
	try {
		const data = await pool.query('SELECT * FROM reviews ORDER BY id ASC;');
		res.send(data.rows);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getReviewbyID = async (req, res, next) => {
	try {
		const data = await pool.query('SELECT * FROM reviews WHERE id=$1', [
			req.params.id,
		]);

		if (data.rows.length === 0) {
			res.status(400).send('No review with this ID');
		} else {
			res.send(data.rows);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getReviewbyProductID = async (req, res, next) => {
	try {
		const data = await pool.query('SELECT * FROM reviews WHERE product_id=$1', [
			req.params.id,
		]);

		if (data.rows.length === 0) {
			res.status(400).send('This product has no review');
		} else {
			res.send(data.rows);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createReview = async (req, res, next) => {
	try {
		const { comment, rate } = req.body;
		const data = await pool.query(
			'INSERT INTO reviews (comment, rate) VALUES($1,$2) RETURNING *;',
			[comment, rate],
		);
		res.send(data.rows[0]);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updateReview = async (req, res, next) => {
	try {
		const { comment, rate, product_id } = req.body;
		const data = await pool.query(
			'UPDATE reviews SET comment=$1,rate=$2,product_id=$3 WHERE id=$4 RETURNING *;',
			[comment, rate, product_id, req.params.id],
		);
		res.send(data.rows[0]);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteReview = async (req, res, next) => {
	try {
		await pool.query('DELETE FROM reviews WHERE id=$1', [req.params.id]);
		res.status(204).send('Review deleted from the database.');
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
	getReviewbyProductID,
};

export default reviewHandler;
