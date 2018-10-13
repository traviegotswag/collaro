-- COLLARO DATABASE
----------------------------------------------------------------------------------------------------------------------------------------------------------

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS measurements;
DROP TABLE IF EXISTS slimsizes;
DROP TABLE IF EXISTS relaxedsizes;
DROP TABLE IF EXISTS products;
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
  shoulder integer,
 	chest integer,
	waist integer,
	hips integer,
	shirtlength integer,
	sleevelength integer,
	elbow integer,
	leftcuff integer,
	rightcuff integer,
	cufflength integer,
	collarwidth integer,
	user_id integer,
	product_id integer
 );


CREATE TABLE IF NOT EXISTS slimsizes (
  id serial PRIMARY KEY,
  size text,
  shoulder integer,
 	chest integer,
	waist integer,
	hips integer,
	shirtlength integer,
	sleevelength integer,
	elbow integer,
	leftcuff integer,
	rightcuff integer,
	cufflength integer,
	collar integer,
	user_id integer,
	product_id integer
 );

CREATE TABLE IF NOT EXISTS relaxedsizes (
  id serial PRIMARY KEY,
  size text,
  shoulder integer,
 	chest integer,
	waist integer,
	hips integer,
	shirtlength integer,
	sleevelength integer,
	elbow integer,
	leftcuff integer,
	rightcuff integer,
	cufflength integer,
	collar integer,
	user_id integer,
	product_id integer
);

CREATE TABLE IF NOT EXISTS products (
  id serial PRIMARY KEY,
  category text,
  user_id text
 );

-- CREATE TABLE IF NOT EXISTS style (
--   id serial PRIMARY KEY,
-- 	collar text,
-- 	front text,
-- 	cuff text,
-- 	monogram text,
-- 	back text,
-- 	note text
--  );