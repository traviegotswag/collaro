module.exports = (app, db) => { //references db from index.js

//ROUTES REQUIRE CONTROLLER
  const users = require('./controllers/user')(db);



  /*
   *  =========================================
   *  Users
   *  =========================================
   */


// 1.6 The app provides a basic user creation, so the basic app doesn't nee d anything more for users.
// Implement login of the user. ( change the code to a hashed session cookie, instead of just loggedin=true.
// Create the ability to make a tweet.
// Change the root route to display all tweets.


// CRUD users
app.get('/users/new/', users.signup);
app.get('/users/login/', users.loginForm);
app.get('/users/questionnaire/', users.questionnaireForm);
app.get('/users/:username', users.userhome);
app.get('/users/logout', users.logout);

app.post('/users/new', users.create);
app.post('/users/login', users.login);
app.post('/users/logout', users.logout);
app.post('/users/questionnaire', users.questionnaire);
// app.post('/users/:username/editmeasurements', users.editMeasurements);

// app.post('/users/questionnaire', users.questionnaire);

};

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