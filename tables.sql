-- COLLARO DATABASE
----------------------------------------------------------------------------------------------------------------------------------------------------------

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS measurements;
DROP TABLE IF EXISTS slimsizeswithoutbelly;
DROP TABLE IF EXISTS slimsizeswithbelly;
DROP TABLE IF EXISTS relaxedsizeswithoutbelly;
DROP TABLE IF EXISTS relaxedsizeswithbelly;
DROP TABLE IF EXISTS fitpictures;
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS style;

CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  email text,
  username text,
  password text

);

CREATE TABLE IF NOT EXISTS questions (
  id serial PRIMARY KEY,
  existingsize text,
  height text,
  weight text,
  belly text,
  fit text,
  collar text,
  front text,
  cuff text,
  customersize text,
  user_id integer,
  username text
 );

CREATE TABLE IF NOT EXISTS measurements (
  id serial PRIMARY KEY,
  shoulder DECIMAL(13,2)  NOT NULL,
 	chest DECIMAL(13,2)  NOT NULL,
	waist DECIMAL(13,2)  NOT NULL,
	hips DECIMAL(13,2)  NOT NULL,
	shirtlength DECIMAL(13,2)  NOT NULL,
	sleevelength DECIMAL(13,2)  NOT NULL,
	elbow DECIMAL(13,2)  NOT NULL,
	leftcuff DECIMAL(13,2)  NOT NULL,
	rightcuff DECIMAL(13,2)  NOT NULL,
	cufflength DECIMAL(13,2)  NOT NULL,
	collarwidth DECIMAL(13,2)  NOT NULL,
	user_id integer,
	product_id integer,
	time_created TIMESTAMP DEFAULT now(),
	time_modified text
 );


CREATE TABLE IF NOT EXISTS slimsizeswithoutbelly (
  id serial PRIMARY KEY,
  size text,
  shoulder DECIMAL(13,2) NOT NULL,
 	chest DECIMAL(13,2) NOT NULL,
	waist DECIMAL(13,2) NOT NULL,
	hips DECIMAL(13,2)  NOT NULL,
	shirtlength DECIMAL(13,2)  NOT NULL,
	sleevelength DECIMAL(13,2)  NOT NULL,
	elbow DECIMAL(13,2) NOT NULL,
	leftcuff DECIMAL(13,2)  NOT NULL,
	rightcuff DECIMAL(13,2) NOT NULL,
	cufflength DECIMAL(13,2)  NOT NULL,
	collarwidth DECIMAL(13,2)  NOT NULL,
	user_id integer,
	product_id integer
 );

CREATE TABLE IF NOT EXISTS relaxedsizeswithoutbelly (
  id serial PRIMARY KEY,
  size text,
  shoulder DECIMAL(13,2)  NOT NULL,
 	chest DECIMAL(13,2)  NOT NULL,
	waist DECIMAL(13,2)  NOT NULL,
	hips DECIMAL(13,2)  NOT NULL,
	shirtlength DECIMAL(13,2)  NOT NULL,
	sleevelength DECIMAL(13,2)  NOT NULL,
	elbow DECIMAL(13,2)  NOT NULL,
	leftcuff DECIMAL(13,2)  NOT NULL,
	rightcuff DECIMAL(13,2)  NOT NULL,
	cufflength DECIMAL(13,2)  NOT NULL,
	collarwidth DECIMAL(13,2)  NOT NULL,
	user_id integer,
	product_id integer
);

CREATE TABLE IF NOT EXISTS slimsizeswithbelly (
  id serial PRIMARY KEY,
  size text,
  shoulder DECIMAL(13,2)  NOT NULL,
 	chest DECIMAL(13,2)  NOT NULL,
	waist DECIMAL(13,2)  NOT NULL,
	hips DECIMAL(13,2)  NOT NULL,
	shirtlength DECIMAL(13,2)  NOT NULL,
	sleevelength DECIMAL(13,2)  NOT NULL,
	elbow DECIMAL(13,2)  NOT NULL,
	leftcuff DECIMAL(13,2)  NOT NULL,
	rightcuff DECIMAL(13,2)  NOT NULL,
	cufflength DECIMAL(13,2)  NOT NULL,
	collarwidth DECIMAL(13,2)  NOT NULL,
	user_id integer,
	product_id integer
 );

CREATE TABLE IF NOT EXISTS relaxedsizeswithbelly (
  id serial PRIMARY KEY,
  size text,
  shoulder DECIMAL(13,2)  NOT NULL,
 	chest DECIMAL(13,2)  NOT NULL,
	waist DECIMAL(13,2)  NOT NULL,
	hips DECIMAL(13,2)  NOT NULL,
	shirtlength DECIMAL(13,2)  NOT NULL,
	sleevelength DECIMAL(13,2)  NOT NULL,
	elbow DECIMAL(13,2)  NOT NULL,
	leftcuff DECIMAL(13,2)  NOT NULL,
	rightcuff DECIMAL(13,2)  NOT NULL,
	cufflength DECIMAL(13,2)  NOT NULL,
	collarwidth DECIMAL(13,2)  NOT NULL,
	user_id integer,
	product_id integer
);

CREATE TABLE IF NOT EXISTS fitpictures (
  id serial PRIMARY KEY,
  user_id integer,
  username text,
  image_url text
 )

-- CREATE TABLE IF NOT EXISTS products (
--   id serial PRIMARY KEY,
--   category text,
--   user_id text
--  );

-- CREATE TABLE IF NOT EXISTS style (
--   id serial PRIMARY KEY,
-- 	collar text,
-- 	front text,
-- 	cuff text,
-- 	monogram text,
-- 	back text,
-- 	note text
--  );