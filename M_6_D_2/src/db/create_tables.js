import fs from 'fs-extra';
import path from 'path';
import pool from './pool.js';

const allTables = path.join(process.cwd(), 'src/db/allTable.sql');

const createAllTables = async () => {
	try {
		const buffer = await fs.readFile(allTables);
		const tablesSQLQuery = buffer.toString();
		await pool.query(tablesSQLQuery);
		console.log(`✅ All tables are created.`);
	} catch (error) {
		console.log(error);
	}
};

export default createAllTables;

/*
This function will execute the crating of tables we defined in table.sql 
Firs when we read the table it will be buffer so we need to conver it into string ----line 9 and 10.
Once it is converted to excutet use pool.query. This will creat the tables in the DB in pgAdmin
Dont forget to export this function in server.js file. That is where it will be excuted.
*/
