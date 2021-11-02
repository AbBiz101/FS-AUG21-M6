import fs from 'fs-extra';
import path from 'path';
import pool from './pool.js';

const tablesProduct = path.join(process.cwd(), 'src/db/productTable.sql');

const createProductTables = async () => {
	try {
		const buffer = await fs.readFile(tablesProduct);
		const tablesSQLQuery = buffer.toString();
		await pool.query(tablesSQLQuery);
		console.log(`✅ Product table is created.`);
	} catch (error) {
		console.log(error);
	}
};

export default createProductTables;
