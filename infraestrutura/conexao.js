const mysql = require('mysql');

const conexao = mysql.createConnection({
	host: "localhost",
	port: 3309,
	user: "capacity",
	password: "capacity123",
	database : "capacitydb"
});

module.exports = conexao;