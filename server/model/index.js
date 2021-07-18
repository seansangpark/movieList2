const connection = require('../db');

module.exports = {
  getFromDB: (callback) => {
    connection.query('SELECT * FROM movieTitle', callback);
  },
  postToDB: (data, callback) => {
    connection.query(`INSERT INTO movieTitle (title) value ('${data}')`, callback)
  }
}