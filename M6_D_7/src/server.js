import listEndpoints from 'express-list-endpoints';
import blogRouter from './services/posts/index.js';
import commentsRouter from './services/comments/index.js';
import mongoose from 'mongoose';
import express from 'express';
import {
	notFoundHandler,
	badRequestHandler,
	genericErrorHandler,
} from './errorHandler.js';
import cors from 'cors';

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.use('/blogpost', blogRouter);
server.use('/comments', commentsRouter);

server.use(notFoundHandler);
server.use(badRequestHandler);
server.use(genericErrorHandler);

mongoose.connect(process.env.MONGO_CONNECTION);

mongoose.connection.on('connected', () => {
	console.log('Mongo Connected!');

	server.listen(port, () => {
		console.table(listEndpoints(server));
		console.log(`Server running on port ${port}`);
	});
});

mongoose.connection.on('error', (err) => {
	console.log('the error is-', err);
});
