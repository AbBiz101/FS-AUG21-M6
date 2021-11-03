import express from 'express';
import cors from 'cors';
import Endpoints from 'express-list-endpoints';
import { testConnection, connectDB } from './db/index.js';
import router from './services/router.js';

const server = express();
const PORT = process.env.PORT;

server.use(cors());

server.use(express.json());

server.use('/amazon', router);

console.table(Endpoints(server));
server.listen(PORT, async () => {
	console.log(`Server is listening on port ${PORT}   *** 3 `);
	await testConnection();
	await connectDB();
});
