DROP TABLE IF EXISTS TBL_PERSON;
  
CREATE TABLE TBL_PERSON (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  age VARCHAR(250) DEFAULT NULL,
  favourite_colour VARCHAR(250) DEFAULT NULL
);
