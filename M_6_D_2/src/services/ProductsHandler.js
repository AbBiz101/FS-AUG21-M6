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
		const data = await pool.query('SELECT * FROM product WHERE id=$1', [
			req.params.id,
		]);

		if (data.rows.length === 0) {
			res.status(400).send('Product not available');
		} else {
			res.send(data.rows[0]);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createProduct = async (req, res, next) => {
	try {
		const { name, description, brand, image_url, price, category } = req.body;
		const data = await pool.query(
			'INSERT INTO product (name,description,brand,image_url,price,category) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;',
			[comment, rate],
		);
		res.send(data.rows[0]);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updateProduct = async (req, res, next) => {
	try {
		const { comment, rate } = req.body;
		const data = await pool.query(
			'UPDATE product SET name=$1,description=$2,brand=$3,image_url=$4,price=$5,category=$6 RETURNING *;',
			[comment, rate, req.params.id],
		);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		await pool.query('DELETE FROM product WHERE id=$1', [req.params.id]);
		res.status(204).send();
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
