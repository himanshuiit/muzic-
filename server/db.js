import mysql from 'mysql';
var connection = mysql.createConnection({
	// properties ..
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '',
	database: 'muzic'
});
connection.connect(function(error) {
	if (error) {
		throw error;
	} 
});
export default connection;
