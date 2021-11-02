import pool from '../db/pool.js';

const getAllProducts = async (req, res, next) => {
	try {
		const data = await pool.query('SELECT * FROM product ORDER BY id ASC;');
		res.send(data.rows);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getProductsbyID = async (req, res, next) => {
	try {
		const data = await pool.query('SELECT * FROM users WHERE id=$1', [
			req.params.id,
		]);
		
		if (data.rows.length === 0) {
			res.status(400).send('User not found');
		} else {
			res.send(data.rows[0]);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createProduct = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updateProduct = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const productHandler = {
	getAllProducts,
	getProductsbyID,
	createProduct,
	updateProduct,
	deleteProduct,
};

export default productHandler;
