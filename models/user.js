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

//BACKUP
    // const questionnaire = (user, userId, userName, callback) => {
    //   // set up query
    //   const queryString = 'INSERT INTO questions (existingsize, height, weight, belly, fit, collar, front, cuff, customersize, user_id, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING customersize';
    //   //FIGURE OUT HOW TO GET USER ID---------------------------------------------------------------
    //   const values = [
    //                     user.existingsize,
    //                     user.height,
    //                     user.weight,
    //                     user.belly,
    //                     user.fit,
    //                     user.collar,
    //                     user.front,
    //                     user.cuff,
    //                     user.customersize,
    //                     userId,
    //                     userName
    //                     ];

    //   dbPool.query(queryString, values, (error, queryResult) => {
    //     // console.log(queryResult);
    //     // invoke callback function with results after query has executed
    //     callback(error, queryResult);
    //   });
    // };


    const userhome = (user, userId, callback) => {
      // set up query
      const queryString = 'SELECT existingsize, height, weight, belly, fit, collar, front, cuff, customersize FROM questions WHERE user_id = ($1) '
      const values = [
                        userId
                        ];

      dbPool.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    return {
        encrypt,
        create,
        login,
        questionnaire,
        userhome
        // logout [WIP] - NEED TO INSERT BUTTON IN HOME PAGE AND OTHER PAGES?
    };
};



    const userhome = (user, userId, callback) => {
      // set up query
      const queryString = 'SELECT existingsize, height, weight, belly, fit, collar, front, cuff, customersize FROM questions WHERE user_id = ($1) '
      const values = [
                        userId
                        ];

      dbPool.query(queryString, values, (error, queryResult) => {
      const queryString = 'INSERT INTO questions (existingsize, height, weight, belly, fit, collar, front, cuff, customersize, user_id, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING customersize';
      //FIGURE OUT HOW TO GET USER ID---------------------------------------------------------------
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

      dbPool.query(queryString, values, (error, queryResult1) => {
        // console.log(queryResult);
        // invoke callback function with results after query has executed
        callback(error, queryResult, queryResult1);
      });
        // console.log("USER INFO IS: ",queryResult);
        // invoke callback function with results after query has executed
        //callback(error, queryResult);
      });
    };


