import pool from '../db/pool.js';

const getAllProducts = async (req, res, next) => {
	try {
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getProductsbyID = async (req, res, next) => {
	try {
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