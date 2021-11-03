import express from 'express';
import cors from 'cors';

const server = express();
const PORT = process.env.PORT;

server.use(cors());

server.listen(PORT, async () => {
	console.log(`Server is listening on port ${PORT}   *** 1 `);
});
