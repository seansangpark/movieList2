CREATE DATABASE IF NOT EXISTS movieList;
use movieList;
CREATE TABLE IF NOT EXISTS movieTitle (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);