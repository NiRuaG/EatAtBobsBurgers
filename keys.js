// console.log('keys.js is loaded');
require('dotenv').config();

module.exports = {
  mysql: {
    user : process.env.MYSQL_USER,
      pw : process.env.MYSQL_PW
  }
}