module.exports = (app, db, upload) => { //references db from index.js

//ROUTES REQUIRE CONTROLLER
  const users = require('./controllers/user')(db, upload);

  /*
   *  =========================================
   *  Users
   *  =========================================
   */

//-------------------------------------------- CRUD users - GET

app.get('/users/new/', users.signup);
app.get('/users/login/', users.loginForm);
app.get('/users/questionnaire/', users.questionnaireForm);
app.get('/users/:username/', users.userhome);
app.get('/users/logout/', users.logout);
app.get('/users/:username/edit/', users.editProfile);
// app.get('*', response.send("Page not found, go somewhere else yo!"))


//-------------------------------------------- CRUD users - POST

app.post('/users/new', users.create);
app.post('/users/login', users.login);
app.post('/users/logout', users.logout);
app.post('/users/questionnaire', users.questionnaire);
// app.post('/users/:username/upload', users.uploadFitPictures);

app.post('/users/:username/upload', upload.array('image', 4), users.uploadFitPictures)
// "HOW TO ALLOW FOR TEXT?" --> req.body will contain the text fields, if there were any

//-------------------------------------------- CRUD users - PUT

app.put('/users/:username', users.updateProfile);

};

