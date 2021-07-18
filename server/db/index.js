var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movieList'
});

connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
  } else {
    console.log(`Connected to MySQL as id ${connection.threadId}`)
  }
});

module.exports = connection;