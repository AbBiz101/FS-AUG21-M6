import pg from 'pg';
const pool = new pg.Pool();
export default pool;

/*
in this file we create connection and reuse that connection. 
Without pool we have to create a new connection to all the requestes from FE 

Sometimes the .env file could lead the connection to another db that existes before. 
so to make sure that it i connected to this one add this

import dotenv from 'dotenv'
dotenv.config()
*/
