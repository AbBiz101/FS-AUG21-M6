import Tables from '../db/models/index.js';

const { User, Review, Product } = Tables;

const getAllUser = async (req, res, next) => {
	try {
		const user = await User.findAll({
			include: { model: Review, include: Product },
		});
		res.send(user);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const createUser = async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		res.send(newUser);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const getUserById = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.params.id);
		res.send(user);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const updateUser = async (req, res, next) => {
	try {
		const userUpdate = await User.update(req.body, {
			where: {
				id: req.params.id,
			},
			returning: true,
		});
		res.send(userUpdate);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const deleteUser = async (req, res, next) => {
	try {
		const user = await User.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.send({ user });
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const routerUser = {
	getAllUser,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
};

export default routerUser;
