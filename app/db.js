const mysql = require('mysql');
const faker = require('faker');

const config = {
	host: 'db',
	user: 'root',
	password: 'iniciar',
	database: 'nodedb',
	insecureAuth: true,
};

const insertNewName = () => {
	return new Promise((resolve) => {
		const connection = mysql.createConnection(config);
		const sql = 'INSERT INTO people (name) values (?)';

		connection.query(sql, [faker.name.findName()], () => {
			resolve();
		});
		connection.end();
	});
};

const getNames = async () => {
	return new Promise((resolve) => {
		const connection = mysql.createConnection(config);
		const sql = 'select * from people';
		connection.query(sql, (error, results, fields) => {
			const names = results.map((result) => {
				return result.name;
			});

			resolve(names);
		});
		connection.end();
	});
};

module.exports = { insertNewName, getNames };
