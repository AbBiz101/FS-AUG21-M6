import express from 'express';
import amazonRouter from './services/productRoutes.js'
import amazonReview from './services/ReviewHandler.js';

const server = express();
const { PORT } = process.env;
server.use(express.json());

server.use('/amazon', amazonRouter);
server.use('/amazon', amazonRouter);

server.listen(PORT, async () => {
	console.log(`Server-${PORT}.`);
});
server.on('error', console.log);
