//EXAMPLE OF NESTED QUERY
// const getPokemon = (request, response) => {

//     const queryString = `SELECT * FROM pokemon WHERE id = ${request.params.id}`;

    const queryString2 = `
        SELECT pokemon.id AS pokemonid, pokemon.name AS pokemonname, users_pokemon.user_id AS trainerid, users.name AS trainername

        FROM users
        INNER JOIN users_pokemon
        ON (users.id = users_pokemon.user_id)
        INNER JOIN pokemon
        ON (users_pokemon.pokemon_id = pokemon.id)

        WHERE users_pokemon.pokemon_id = ${request.params.id}`;

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

//USING OF FOR IN LOOP
 // for in IS ONLY FOR OBJECT



// ALTERNATIVE WAY OF WRITING THE CODE
//  var express = require('express')
//   , router = express.Router()
//   , multer = require('multer')

// var uploading = multer({
//   dest: __dirname + '../public/uploads/',
//   limits: {fileSize: 1000000, files:4},
// })

// router.post('/upload', uploading, function(req, res) {

// })

// module.exports = router

//         app.post('/photos/upload', upload.array('photos', 6), function (req, res, next) {
//           // req.files is array of `photos` files
//           // req.body will contain the text fields, if there were any
//         })


//     // WHAT IS THIS NEXT?
//     const uploadFitPictures = (request,response) => {
//         var userId = request.cookies['userid'];
//         var userName = request.cookies['username'];
//         var upload = multer({storage: storage}).any('uploadedImages')

//         db.user.uploadFitPictures(request.files, userId, userName, (error, queryResult) => {
//             if (error) {
//                 console.error('error uploading pictures: ', error);
//                 response.sendStatus(500);
//             } else if (queryResult.rowCount >= 1) {
//                 console.log("RESULT HEY", queryResult);
//                 response.redirect('/users/' + userName);
//             }
//         });
//     }

// // upload.array('photos', 12)


<Approach and Process>
- What in my process and approach to this project would I do differently next time?
    1. Didnt do pseudocode this time round, wasnt sure it would help, to reassess
    2. Perhaps talk in greater detail about project scope and get advice on what I should avoid - instead of trying to bulldoze my way through later

-What in my process and approach to this project went well that I would repeat next time?
    1. Building project in phases, a habit that Ive acquired since proj 1
    2. Getting different opinions from different classmates, to get fresh perspectives on how to solve issues/get new ideas


<Code and Code Design>
What in my code and program design in the project would I do differently next time?
    1. Tried to do MVC, struggled a bit
    2. Have a feeling that the way im doing now is very messy, would like to get some advice on refactoring

What in my code and program design in the project went well? Is there anything I would do the same next time?
    1. MVC?

What habits did I have during this unit that I can improve on?
    1. Left styling to the end, not sure if this is best practice
    2. Learning how to troubleshoot issues on my own and not be dependent on friends

How is the overall level of the course during this unit? (instruction, course materials, etc.)
    1. Difficult, but felt better compared to unit 1 as Ive acclimatized a bit more
    2. MVC was to be a big component of this project, but believe the lesson can be better taught
        - other than myself a few people i spoke to all had difficulties understanding
        - jump from non-MVC to MVC is quite big


GOING BACK TO OLD COMMITTED VERSION, MAKE CHANGES, RESOLVING CONFLICTS WITH THE LATEST VERSION OF MASTER HEAD, THEN UPLOAD LATER

- git checkout to the previous working commit "8eb4a", head is latest commit so when you do this, you will get a notification telling you that you have a detached head
- git checkout -b Development  - this goes to the new branch  which you want to create called Development, checkout means going to somewhere
- git push origin Development - when its there
- git checkout master - this goes to original branch and you are asked to resolve conflict
- git status: check which branch you on, may say something like "On branch master"
- Your branch is behind 'origin/master' by 3 commits, and can be fast-forwarded.
- git pull: to update local branch


Questions:

- Understanding branches
- Reiterating MVC, with 1 query, then with nested queries
- Check why this statement works:
- var queryString3 = 'INSERT INTO measurements (shoulder, chest, waist, hips, shirtlength, sleevelength, elbow, leftcuff, rightcuff, cufflength, collar, user_id) SELECT $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 WHERE NOT EXISTS (SELECT * FROM measurements where user_id = $12)';
- How will you display the error message if users upload more than the limit?
- Why is there a need to do an if err in models?
