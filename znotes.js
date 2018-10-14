//EXAMPLE OF NESTED QUERY
// const getPokemon = (request, response) => {

//     const queryString = `SELECT * FROM pokemon WHERE id = ${request.params.id}`;

//     const queryString2 = `
//         SELECT pokemon.id AS pokemonid, pokemon.name AS pokemonname, users_pokemon.user_id AS trainerid, users.name AS trainername

//         FROM users
//         INNER JOIN users_pokemon
//         ON (users.id = users_pokemon.user_id)
//         INNER JOIN pokemon
//         ON (users_pokemon.pokemon_id = pokemon.id)

//         WHERE users_pokemon.pokemon_id = ${request.params.id}`;


//     pool.query(queryString, (err, result) => {

//         if (err) {console.error('Query error: ', err.stack);}

//         else {

//             pool.query(queryString2, (err2, result2) => {

//                 if (err2) {console.error('Query2 error: ', err2.stack);}

//                 else {

//                     console.log('Query result: ', result);
//                     console.log('Query2 result: ', result2)

//                     response.render('pokemon/pokemon', { pokemon: result.rows[0], trainers: result2.rows });

//                 };
//             });
//         };
//     });
// };


//-------------------------------------------------------------
    // CONTROLLER - old nested query code
    // const userhome = (request,response) => {
    //     var userId = request.cookies['userid'];
    //     //NEED TO DEFINE customerFit and customerSize
    //     db.user.userhome(request.body, userId, customerFit, customerSize, (error1,questionsQueryResult), (error2,smartSizeQueryResult) => {
    //         if (error) {
    //             console.error('error displaying user home page', error);
    //             response.sendStatus(500);
    //         } else if (questionsQueryResult.rowCount >= 1) {
    //             var userProfile = questionsQueryResult.rows;
    //             var userMeasurements = smartSizeQueryResult.rows;
    //             response.render('user/home', {questions: userProfile, measurements: userMeasurements});
    //         }
    //     });
    // }

// ----------------------------------------------------

    //MODELS - old nested query code [SEE WHATS WRONG]
    // const userhome = (user, userId, customerFit, customerSize, callback1, callback2) => {
    //   var queryString1 = 'SELECT existingsize, height, weight, belly, fit, collar, front, cuff, customersize FROM questions WHERE user_id = ($1) '
    //   var values1 = [userId];

    //     if (customerFit == "Slim") {
    //         var queryString2 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar FROM slimsizes WHERE size = ($1)'
    //     } else if (customerFit == "Relaxed") {
    //         var queryString2 = 'SELECT shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar FROM relaxedsizes WHERE size = ($1)'
    //     }
    //     var values2 = [customerSize];

    //   dbPool.query(queryString1, values1, (error1, questionsQueryResult) => {

    //         dbPool.query(queryString2, values2, (error2, smartSizeQueryResult) => {
    //         // console.log(queryResult);
    //         callback1(error1, questionsQueryResult);
    //         callback2(error2, smartSizeQueryResult);
    //         });
    //   });
    // };


// INDEX.JS
// const express = require('express');
// const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
// const db = require('./db');
// const multer = require('multer');


// /**
//  * ===================================
//  * Configurations and set up
//  * ===================================
//  */

// // Init express app
// const app = express();

// // Set up middleware
// const upload = multer({ dest: 'public/uploads/' })

// app.use(methodOverride('_method'));
// app.use(express.static('public'));
// app.use(express.json());

// app.use(cookieParser());
// app.use(express.urlencoded({
//   extended: true
// }));


// // Set react-views to be the default view engine
// const reactEngine = require('express-react-views').createEngine();
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');
// app.engine('jsx', reactEngine);

// /**
//  * ===================================
//  * Routes
//  * ===================================
//  */

// // Import routes to match incoming requests
// require('./routes')(app, db, upload); //APP being express, DB REFERS TO DB FILE
// //DOES THE SEQUENCE MATTER?????

// SAME FOR Routes
// module.exports = (app, db, upload) => { //references db from index.js

// //ROUTES REQUIRE CONTROLLER
//   const users = require('./controllers/user')(db, upload);