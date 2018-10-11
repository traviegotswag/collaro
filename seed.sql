
-- -- QUESTIONS
-- INSERT INTO questions (existingsize, height, weight, belly, fit, collar, front, cuff, customersize, user_id, username) VALUES ('XS','1.68m','55kg','none','normal','classic','clean','barrel','smartsize',1,'karwei');
-- INSERT INTO questions (existingsize, height, weight, belly, fit, collar, front, cuff, customersize, user_id, username) VALUES ('S','1.78m','62kg','small','slim','mandarin','concealed','angled','measuredsize',2,'faidhi');

-- MEASUREMENTS
INSERT INTO measurements (shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar, product_id) VALUES ('16.5in','38in','35in','37.5in','26.5in','24.25in','11.75in','9.25in','9.25in','3in','15in',1);
INSERT INTO measurements (shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar, product_id) VALUES ('17.5in','39.5in','37.5in','39.5in','27in','25in','13.25in','9.75in','10.25in','3in','16in',1);

-- SLIMSIZES
INSERT INTO slimsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('XS',16.5,39,36,38,28,24,11,8.5,8.5,2.5,15);
INSERT INTO slimsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('S',17,41,38,40,29,24.5,12,9,9,2.5,15.5);
INSERT INTO slimsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('M',17.5,43,40,42,30,25,13,9.5,9.5,2.5,16);
INSERT INTO slimsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('L',18,46,43,45,31,25.5,14,10,10,2.5,16.5);
INSERT INTO slimsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('XL',19,48,45,47,31.5,26,15,10.5,10.5,2.5,17.5);

-- RELAXEDSIZES
INSERT INTO relaxedsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('XS',17,40,38,40,28,24,11,8.5,8.5,2.5,15);
INSERT INTO relaxedsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('S',17.5,42,40,42,29,24.5,12,9,9,2.5,15.5);
INSERT INTO relaxedsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('M',18,44,42,44,30,25,13,9.5,9.5,2.5,16);
INSERT INTO relaxedsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('L',18.5,47,46,47,31,25.5,14,10,10,2.5,16.5);
INSERT INTO relaxedsizes (size, shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar) VALUES ('XL',19.5,50,49,50,31.5,26,15,10.5,10.5,2.5,17.5);

-- PRODUCTS
INSERT INTO products (category,user_id) VALUES('lstuckout','1');
INSERT INTO products (category,user_id) VALUES('lstuckout','1');
INSERT INTO products (category,user_id) VALUES('lstuckin','2');
INSERT INTO products (category,user_id) VALUES('lstuckin','2');



