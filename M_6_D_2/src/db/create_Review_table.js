import fs from 'fs-extra';
import path from 'path';
import pool from './pool.js';

const tablesReview = path.join(process.cwd(), 'src/db/reviewTable.sql');

const createReviewTables = async () => {
	try {
		const buffer = await fs.readFile(tablesReview);
		const tablesSQLQuery = buffer.toString();
		await pool.query(tablesSQLQuery);
		console.log(`✅ Review table is created.`);
	} catch (error) {
		console.log(error);
	}
};

export default createReviewTables;
