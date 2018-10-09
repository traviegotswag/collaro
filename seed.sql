
-- USERS
INSERT INTO users (username, password) VALUES('Karwei','karwei');
INSERT INTO users (username, password) VALUES('Faidhi','faidhi');

-- QUESTIONS
INSERT INTO questions (size, height, weight, belly, fit, collar, front, cuff, user_id) VALUES ('XS','1.68m','55kg','none','normal','classic','clean','barrel',1);
INSERT INTO questions (size, height, weight, belly, fit, collar, front, cuff, user_id) VALUES ('S','1.78m','62kg','small','slim','mandarin','concealed','angled',1);

-- MEASUREMENTS
INSERT INTO measurements (shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar, product_id) VALUES ('16.5in','38in','35in','37.5in','26.5in','24.25in','11.75in','9.25in','9.25in','3in','15in',1);
INSERT INTO measurements (shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar, product_id) VALUES ('17.5in','39.5in','37.5in','39.5in','27in','25in','13.25in','9.75in','10.25in','3in','16in',1);

-- PRODUCTS
INSERT INTO products (category,user_id) VALUES('lstuckout','1');
INSERT INTO products (category,user_id) VALUES('lstuckout','1');
INSERT INTO products (category,user_id) VALUES('lstuckin','2');
INSERT INTO products (category,user_id) VALUES('lstuckin','2');


