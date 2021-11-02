CREATE TABLE IF NOT EXISTS
	product (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name VARCHAR(50) NOT NULL,
		description VARCHAR(100) NOT NULL,
		brand VARCHAR(50) NOT NULL,
		image_url VARCHAR(200) NOT NULL,
		price VARCHAR(50) NOT NULL,
		category VARCHAR(50) NOT NULL,
		created_at TIMESTAMPTZ DEFAULT NOW(),
		updated_at TIMESTAMPTZ DEFAULT NOW()
	);

CREATE TABLE IF NOT EXISTS
	reviews (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		comment VARCHAR(50) NOT NULL,
		rate VARCHAR(50) NOT NULL,
		product_id VARCHAR(50) NOT NULL, 
		created_at TIMESTAMPTZ DEFAULT NOW()
	);


/*
In this file, we define the table and its property, column, the data type of that column, and other settings
it will creat the tables if they do not exsst only(if we set it to be that way.)
*/

	