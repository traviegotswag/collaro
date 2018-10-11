//WHEN YOU POST INFO, IT COMES TO THE CONTROLLER, SO ANY REQUEST EG. REQ.BODY SHOULD BE DONE HERE

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const signup = (request, response) => {
    response.render('user/NewUser');
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
                // alert("Welcome to Collaro, your account has been created.");
                var userId = queryResult.rows[0].id;
                // console.log(userId);
                response.cookie('loggedIn', true);
                response.cookie('username', username);
                response.cookie('password', hashedPassword);
                response.cookie('userid', userId);
                response.redirect('/users/questionnaire');
                // FIND OUT HOW TO RETRIEVE USERID
                // response.redirect('/users/login');
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
                        response.redirect('/users/');
                        // response.redirect('/users/questionnaire');
                        //CHECK HOW TO IMPLEMENT THIS IF AUTO LOGOUT AFTER USER ACCOUNT IS CREATED
                        // if () {
                        //     response.send(`${dbUsername} is logged in`);
                        //     // response.render('user/home'); TBC - START WHEN BASIC ARCHITECTURE IS UP------------------------------------
                        // } else {
                        // }
                    } else {
                        console.log('Login details are incorrect');
                        response.redirect('/users/login');
                    }
            }
        })
    }

    const logout = (request, response) => {
        response.clearCookie('loggedIn');
        response.clearCookie('userid');
        response.clearCookie('username');
        response.redirect('user/login');
    };

    const questionnaireForm = (request, response) => {
        response.render('user/questionnaire');
    };

    const questionnaire = (request,response) => {
        //DO A QUERY TO INSERT INFO INTO DATABASE
        var userId = request.cookies['userid'];
        var userName = request.cookies['username'];
        db.user.questionnaire(request.body, userId, userName, (error, queryResult) => {
            if (error) {
                console.error('error inserting new measurements of customer', error);
                response.sendStatus(500);
            } else if (queryResult.rowCount >= 1) {
                // response.redirect('/user/');
                const customersize = queryResult.rows[0].customersize;
                if (customersize == "Algorithm-generated smart size") {
                    response.redirect('/users/');
                } else if (customersize == "Be physically measured in person") {
                    response.send("We will email you to arrange a time for you to be measured.");
                    //DECIDE IF SHOULD INCLUDE A SCHEDULING PAGE
                }
            }
        });
    }

    const userhome = (request,response) => {
        var userId = request.cookies['userid'];
        db.user.userhome(request.body, userId, (error, queryResult) => {
            if (error) {
                console.error('error displaying user home page', error);
                response.sendStatus(500);
            } else if (queryResult.rowCount >= 1) {
                var userInfo = queryResult.rows;
                response.render('user/home', {questions: userInfo});
            }
        });
    }


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
    logout,
    userhome
  };

}

Nested query
    const userhome = (request,response) => {
        var userId = request.cookies['userid'];
        db.user.userhome(request.body, userId, (error, queryResult) => {
            if (error) {
                console.error('error displaying user home page', error);
                response.sendStatus(500);
            } else if (queryResult.rowCount >= 1) {
                var userInfo = queryResult.rows;
                response.render('user/home', {questions: userInfo, fff:"lll"});
            }
        });
    }