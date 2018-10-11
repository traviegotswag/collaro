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
  shoulder text,
 	chest text,
	waist text,
	hips text,
	shirtlength text,
	sleevelength text,
	elbow text,
	leftcuff text,
	rightcuff text,
	cufflength text,
	collar text,
	product_id text
 );


CREATE TABLE IF NOT EXISTS slimsizes (
  id serial PRIMARY KEY,
  size text,
  shoulder text,
 	chest text,
	waist text,
	hips text,
	shirtlength text,
	sleevelength text,
	elbow text,
	leftcuff text,
	rightcuff text,
	cufflength text,
	collar text
 );

CREATE TABLE IF NOT EXISTS relaxedsizes (
  id serial PRIMARY KEY,
  size text,
  shoulder text,
 	chest text,
	waist text,
	hips text,
	shirtlength text,
	sleevelength text,
	elbow text,
	leftcuff text,
	rightcuff text,
	cufflength text,
	collar text
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