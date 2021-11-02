import express from 'express';
import Endpoints from 'express-list-endpoints';
import amazonProduct from './services/productRoutes.js';
import amazonReview from './services/reviewRoute.js';
import createAllTables from './db/create_tables.js';

const server = express();

const { PORT } = process.env;
server.use(express.json());

server.use('/amazonProduct', amazonProduct);
server.use('/amazonReview', amazonReview);

console.table(Endpoints(server));

server.listen(PORT, async () => {
	console.log(`Server-${PORT}.`);
	await createAllTables();
});
server.on('error', console.log);
