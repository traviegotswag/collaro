//WHEN YOU POST INFO, IT COMES TO THE CONTROLLER, SO ANY REQUEST EG. REQ.BODY SHOULD BE DONE HERE

module.exports = (db, upload) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const signup = (request, response) => {
    response.render('user/newuser');
  };

  const create = (request, response) => {
      // use user model method `create` to create new user entry in db
      //REQUEST.BODY RETURNS AN OBJECT
        const username = request.body.username;
        const enteredPassword = request.body.password;
        const hashedPassword = db.user.encrypt(enteredPassword);

        db.user.create(request.body, (error, queryResult) => {
            if (error) {
                console.error('error getting user:', error);
                response.sendStatus(500);
            } else if (queryResult.rowCount >= 1) {
                console.log('User created successfully');
                var userId = queryResult.rows[0].id;
                // console.log(userId);
                response.cookie('loggedIn', true);
                response.cookie('username', username);
                response.cookie('userid', userId);
                response.redirect('/users/questionnaire');
            }
        })
    }


  const loginForm = (request, response) => {
    response.render('user/login');
  };


  const login = (request,response) => {
        db.user.login(request.body, (error, queryResult) => {

            if (error) {
              console.error('error logging in:', error);
              response.sendStatus(500);
            } else if (queryResult.rowCount >= 1) {
                    const dbId = queryResult.rows[0].id;
                    const dbUsername = queryResult.rows[0].username;
                    const dbHashedPassword = queryResult.rows[0].password;
                    const enteredUsername = request.body.username;
                    const hashedEnteredPassword = db.user.encrypt(request.body.password);
                    if (enteredUsername === dbUsername && hashedEnteredPassword === dbHashedPassword) {
                        response.cookie('loggedIn', true);
                        response.cookie('userid', dbId);
                        response.cookie('username', dbUsername);
                        response.redirect('/users/' + enteredUsername);
                    } else {
                        console.log('Login details are incorrect');
                        response.redirect('/users/login');
                    }
            }
        })
    }

//--------------------------------------------------------

    const questionnaireForm = (request, response) => {
        response.render('user/questionnaire');
    };

    const questionnaire = (request,response) => {
        //Query to insert info into database
        var userId = request.cookies['userid'];
        var userName = request.cookies['username'];

        db.user.questionnaire(request.body, userId, userName, (error, queryResult) => {
            if (error) {
                console.error('error inserting new measurements of customer', error);
                response.sendStatus(500);
            } else if (queryResult.rowCount >= 1) {
                // var customerFit = queryResult.rows[0].fit;
                // var customerExistingSize = queryResult.rows[0].existingsize;
                response.redirect('/users/' + userName);
            }
        });
    }

// ----------------------------------------------------------------

    // Nested query to display user's home page
    const userhome = (request, response) => {
        var userId = request.cookies['userid'];
        var username = request.cookies['username'];

        db.user.userhome(request.body, userId, (error1, error2, error3, error4, error5, measurementsQueryResult, questionsQueryResult, smartSizeQueryResult, insertSizeQueryResult, picturesQueryResult) => {
            if (error1) {
                console.error('error1: ', error1);
                response.sendStatus(500);
            } else if (error2) {
                console.error('error2: ', error2);
                response.sendStatus(500);
            } else if (error3) {
                console.error('error3: ', error3);
                response.sendStatus(500);
            } else if (error4) {
                console.error('error4: ', error4);
                response.sendStatus(500);
            } else if (error5) {
                console.error('error5: ', error5);
                response.sendStatus(500);
            } else {
                var userProfile = questionsQueryResult.rows;
                var userMeasurements = smartSizeQueryResult.rows;
                var userPictures = picturesQueryResult.rows;
                response.render('user/home', { questions: userProfile, measurements: userMeasurements, pictures: userPictures, username: username} );
            };
        });
    };


// ----------------------------------------------------------------

    const logout = (request, response) => {
        response.clearCookie('loggedIn');
        response.clearCookie('userid');
        response.clearCookie('username');
        response.redirect('/users/login/');
    };

// ----------------------------------------------------------------

    const editProfile = (request, response) => {
        var userId = request.cookies['userid'];
        var username = request.cookies['username'];
        db.user.editProfile(request.body, userId, (error1, error2, questionsQueryResult, measurementsQueryResult) => {
                if (error1) {
                    console.error('error1: ', error1);
                    response.sendStatus(500);
                } else if (error2) {
                    console.error('error2: ', error2);
                    response.sendStatus(500);
                } else if (questionsQueryResult.rowCount >= 1) {
                    var userProfile = questionsQueryResult.rows;
                    var userMeasurements = measurementsQueryResult.rows;
                    // console.log("userProfile: ", userProfile);
                    // console.log("userMeasurements: ", userMeasurements);
                    response.render('user/editprofile', { questions: userProfile, measurements: userMeasurements, username: username });
                };
        });
    };

      const updateProfile = (request, response) => {
          let username = request.params['username']
          let userId = request.cookies['userid']
          let userHomePage = "/users/" + username
          let userProfile = request.body;

          db.user.updateProfile(request.body, userId, (error1, error2, questionsQueryResult, measurementsQueryResult) => {
            if (error1) {
                console.error('Questions query error:', error1);
            } else if (error2) {
                console.error('Measurements query error:', error2);
            } else {
              console.log('Question query result:', questionsQueryResult);
              console.log('Measurements query result:', measurementsQueryResult);
              response.redirect(userHomePage);
            }
          });
        }

// ----------------------------------------------------------------

    const uploadFitPictures = (request,response) => {
        var userId = request.cookies['userid'];
        var userName = request.cookies['username'];
        // console.log(request.files);

        for (var i = 0; i < request.files.length; i++) {
            db.user.uploadFitPictures(request.files[i].filename, userId, userName, (error, queryResult) => {
                if (error) {
                    console.error('error inserting filename into database: ', error);
                    response.sendStatus(500);
                }
            });
        }
        response.redirect('/users/' + userName);
    }

    const aboutUs = (request, response) => {
        response.render('user/aboutus');
    };

// ----------------------------------------------------------------

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signup,
    create,
    loginForm,
    login,
    questionnaireForm,
    questionnaire,
    userhome,
    logout,
    editProfile,
    updateProfile,
    uploadFitPictures,
    aboutUs
  };

}
