const express = require('express');
const db = require('./db');

const PORT = process.env.NODE_PORT | 3000;

const app = express();

app.get('/', async (req, res) => {
	await db.insertNewName();

	const title = '<h1>FullCycle Rocks!</h1></br>';

	const names = await db.getNames();
	const namesOutput = names.reduce((value, currentValue) => {
		return value + ' - ' + currentValue + '<br>';
	}, '');

	res.send(title + namesOutput);
});

app.listen(PORT, () => {
	console.log(`Server Running on ${PORT}`);
});

db.getNames();
