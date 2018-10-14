//DATABASE INTERFACE, THOUGH BOTH M AND C ARE QUERY, IT IS ONLY DOING THE QUERY
//WE EXECUTE THE QUERY IN MODELS, BUT YOU DONT DEAL WITH RESULT HERE. INSTEAD PASS OVER TO CONTROLLER


var sha256 = require('js-sha256');

//NO RENDERING, JUST DRAFTING OF FUNCTIONS

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPool) => {

    const encrypt = item => {
        const salt = 'salt';
        return sha256(item + salt);
    };

    const create = (user, callback) => {
      var hashedPassword = encrypt(user.password);
      // set up query
      const queryString = 'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id';
      const values = [user.email,user.username,hashedPassword];

      // execute query
      dbPool.query(queryString, values, (error, queryResult) => {
        callback(error, queryResult);
      });
    };

//------------------------------------------
    const login = (user, callback) => {

      // set up query
      const queryString = 'SELECT * FROM users WHERE username = ($1)';
      const values = [user.username];
      // execute query
      dbPool.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };


    const questionnaire = (user, userId, userName, callback) => {
      // set up query
      const queryString = 'INSERT INTO questions (existingsize, height, weight, belly, fit, collar, front, cuff, customersize, user_id, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING customersize, existingsize, fit';
      const values = [
                        user.existingsize,
                        user.height,
                        user.weight,
                        user.belly,
                        user.fit,
                        user.collar,
                        user.front,
                        user.cuff,
                        user.customersize,
                        userId,
                        userName
                        ];

      dbPool.query(queryString, values, (error, queryResult) => {
        // console.log(queryResult);
        callback(error, queryResult);
      });
    };

// ----------------------------------------------------

//FIND A WAY TO SHOW UPDATED MEASUREMENTS INSTEAD OF PULLING OUT FROM THE SIZE TABLE

    const userhome = (user, userId, callback) => {

        //CHECK IF MEASUREMENTS ALR EXISTS RIGHT FROM THE START
        var queryString1 = 'SELECT * FROM measurements WHERE user_id = ($1)'
        var values1 = [userId];

        dbPool.query(queryString1, values1, (error1, measurementsQueryResult) => {

            var queryString2 = 'SELECT existingsize, height, weight, belly, fit, collar, front, cuff, customersize FROM questions WHERE user_id = ($1)'
            var values2 = [userId];

            dbPool.query(queryString2, values2, (error2, questionsQueryResult) => {
                //END OF QUERY 1, START OF NESTED QUERY 2
                var customerCollaroSize = questionsQueryResult.rows[0].customersize;
                var customerExistingSize = questionsQueryResult.rows[0].existingsize;
                var customerFit = questionsQueryResult.rows[0].fit;
                var customerBelly = questionsQueryResult.rows[0].belly;

                // // If measurements exist, then no need to run this next query, but instead run another query to show from measurements
                if (measurementsQueryResult.rowCount >= 1) {
                    var queryString3 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth FROM measurements WHERE user_id = ($1)';
                    var values3 = [userId];
                } else if (customerCollaroSize == "Algorithm-generated smart size") {
                       if (customerFit == "Slim") {
                            if (customerBelly == "No belly") {
                                var queryString3 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth FROM slimsizeswithoutbelly WHERE size = ($1)';
                            } else if (customerBelly == "Slight belly") {
                                var queryString3 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth FROM slimsizeswithbelly WHERE size = ($1)';
                            }
                        } else if (customerFit == "Relaxed") {
                            if (customerBelly == "No belly") {
                                var queryString3 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth FROM relaxedsizeswithoutbelly WHERE size = ($1)';
                            } else if (customerBelly == "Slight belly") {
                                var queryString3 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth FROM relaxedsizeswithbelly WHERE size = ($1)';
                            }
                        }
                        var values3 = [customerExistingSize];
                    } else if (customerCollaroSize == "Be physically measured in person") {

                           if (customerFit == "Slim") {
                                var queryString3 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth FROM slimsizeswithoutbelly WHERE size = ($1)';
                            } else if (customerFit == "Relaxed") {
                                var queryString3 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth FROM relaxedsizeswithoutbelly WHERE size = ($1)';
                            }
                            var values3 = ['To be measured'];
                    }

                dbPool.query(queryString3, values3, (error3, smartSizeQueryResult) => {
                    //CHECK WHY SELECT
                    var queryString4 = 'INSERT INTO measurements (shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collarwidth, user_id) SELECT $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 WHERE NOT EXISTS (SELECT * FROM measurements where user_id = $12)';
                    var values4 = [
                                smartSizeQueryResult.rows[0].shoulder,
                                smartSizeQueryResult.rows[0].chest,
                                smartSizeQueryResult.rows[0].waist,
                                smartSizeQueryResult.rows[0].hips,
                                smartSizeQueryResult.rows[0].shirtlength,
                                smartSizeQueryResult.rows[0].sleevelength,
                                smartSizeQueryResult.rows[0].elbow,
                                smartSizeQueryResult.rows[0].leftcuff,
                                smartSizeQueryResult.rows[0].rightcuff,
                                smartSizeQueryResult.rows[0].cufflength,
                                smartSizeQueryResult.rows[0].collarwidth,
                                userId
                            ];

                    dbPool.query(queryString4, values4, (error4, insertSizeQueryResult) => {

                        callback(error1, error2, error3, error4, measurementsQueryResult, questionsQueryResult, smartSizeQueryResult, insertSizeQueryResult);

                });
            });
        });
    });
};


// ----------------------------------------------------

    const editProfile = (user, userId, callback) => {

        var queryString1 = 'SELECT existingsize, height, weight, belly, fit, collar, front, cuff, customersize FROM questions WHERE user_id = ($1)'
        var values1 = [userId];

        dbPool.query(queryString1, values1, (error1, questionsQueryResult) => {
            //END OF QUERY 1, START OF NESTED QUERY 2
            var queryString2 = 'SELECT * FROM measurements WHERE user_id = ($1)'
            var values2 = [userId];
            //Backup
            // var customerCollaroSize = questionsQueryResult.rows[0].customersize;
            // var customerExistingSize = questionsQueryResult.rows[0].existingsize;
            // var customerFit = questionsQueryResult.rows[0].fit;

            //     if (customerCollaroSize == "Algorithm-generated smart size") {
            //        if (customerFit == "Slim") {
            //             var queryString2 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar FROM slimsizes WHERE size = ($1)';
            //         } else if (customerFit == "Relaxed") {
            //             var queryString2 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar FROM relaxedsizes WHERE size = ($1)';
            //         }
            //             var values2 = [customerExistingSize];

            //         } else if (customerCollaroSize == "Be physically measured in person") {
            //            if (customerFit == "Slim") {
            //                 var queryString2 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar FROM slimsizes WHERE size = ($1)';
            //             } else if (customerFit == "Relaxed") {
            //                 var queryString2 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar FROM relaxedsizes WHERE size = ($1)';
            //             }
            //             var values2 = ['To be measured'];
            //         }


            dbPool.query(queryString2, values2, (error2, measurementsQueryResult) => {

                    callback(error1, error2, questionsQueryResult, measurementsQueryResult);

            });
        });
    };

    const updateProfile = (user, userId, callback) => {
        const queryString1 = 'UPDATE "questions" SET "existingsize"=($1), "height"=($2), "weight"=($3), "belly"=($4), "fit"=($5), "collar"=($6), "front"=($7), "cuff"=($8),"customersize"=($9) WHERE "user_id"=($10)';
        const values1 = [
                        user.existingsize,
                        user.height,
                        user.weight,
                        user.belly,
                        user.fit,
                        user.collar,
                        user.front,
                        user.cuff,
                        user.customersize,
                        userId
                    ];

            dbPool.query(queryString1, values1, (error1, questionsQueryResult) => {
                        //END OF QUERY 1, START OF NESTED QUERY 2
                const queryString2 = 'UPDATE "measurements" SET "shoulder"=($1), "chest"=($2), "waist"=($3), "hips"=($4), "shirtlength"=($5), "sleevelength"=($6), "elbow"=($7), "leftcuff"=($8), "rightcuff"=($9), "cufflength"=($10), "collarwidth"=($11) WHERE "user_id"=($12)';
                const values2 = [
                        user.shoulder,
                        user.chest,
                        user.waist,
                        user.hips,
                        user.shirtlength,
                        user.sleevelength,
                        user.elbow,
                        user.leftcuff,
                        user.rightcuff,
                        user.cufflength,
                        user.collarwidth,
                        userId
                    ];

                        dbPool.query(queryString2, values2, (error2, measurementsQueryResult) => {

                                callback(error1, error2, questionsQueryResult, measurementsQueryResult);

                        });
            });
    }


    return {
        encrypt,
        create,
        login,
        questionnaire,
        userhome,
        editProfile,
        updateProfile
    };
};






